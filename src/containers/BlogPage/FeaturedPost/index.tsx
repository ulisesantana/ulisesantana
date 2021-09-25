import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FeaturedCard from "../../../components/FeaturedCard/FeaturedCard"
import {
  FeaturedPostWrapper,
  FeaturedPostRow,
  FeaturedPostCol,
  SecTitle,
} from "./style"

type FeaturedPostsProps = {}

const FeaturedPosts: React.FunctionComponent<FeaturedPostsProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allSitePage(filter: { path: { eq: "/page/1" } }) {
        nodes {
          context {
            numPages
            currentPage
          }
        }
      }
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 6
      ) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 150)
            slug
            frontmatter {
              date(formatString: "MMM DD, YYYY")
              title
              description
              tags
              cover {
                childImageSharp {
                  gatsbyImageData  
                }
              }
            }
          }
        }
      }
    }
  `)

  const Posts = Data.allMdx.edges

  return (
    <FeaturedPostWrapper>
      <SecTitle>Featured Stories</SecTitle>
      <FeaturedPostRow>
        {Posts.map(({ node }: any) => {
          const title = node.frontmatter.title || node.slug
          return (
            <FeaturedPostCol key={title}>
              <FeaturedCard
                title={title}
                image={node.frontmatter.cover.childImageSharp.gatsbyImageData}
                url={node.slug}
                tags={node.frontmatter.tags}
                description={node.excerpt}
                overlay
              />
            </FeaturedPostCol>
          )
        })}
      </FeaturedPostRow>
    </FeaturedPostWrapper>
  )
}

export default FeaturedPosts
