import React from "react"
import { graphql } from "gatsby"
import { SpanishLayout } from "../components"
import { SEO } from "../components"
import { TagName, TagPageHeading, TagPostsWrapper } from "./templates.style"
import PostCardMinimal from "../components/PostCardMinimal/PostCardMinimal";
import Search from "../containers/SearchContainer/SearchContainer";

const Tags = ({ pageContext, data }: any) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  return (
    <SpanishLayout>
      <SEO
        title={tag}
        description={`Un lista de ${totalCount} entradas sobre ${tag}`}
      />

      <TagPostsWrapper>
        <TagPageHeading>
          <TagName>{tag}</TagName>
          {`${totalCount} entrada${totalCount === 1 ? "" : "s"} sobre ${tag}`}
        </TagPageHeading>
        <Search/>
        {edges.map(({ node }: any) => (
          <PostCardMinimal
            key={node.slug}
            image={node.frontmatter.cover.childImageSharp.fluid}
            title={node.frontmatter.title}
            url={'/' + node.slug}
            description={node.frontmatter.description || node.excerpt}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
          />
        ))}
      </TagPostsWrapper>
    </SpanishLayout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String, $draftDisabledList: [Boolean!]!) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        frontmatter: { 
            tags: { in: [$tag] },
            draft: { nin: $draftDisabledList } 
        } 
      }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 300)
          slug
          frontmatter {
            date
            title
            cover {
              childImageSharp {
                fluid(cropFocus: CENTER, maxWidth: 170, maxHeight: 170, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            tags
            description
          }
        }
      }
    }
  }
`
