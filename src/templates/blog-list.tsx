import * as React from "react"
import { graphql } from "gatsby"
import PostCardMinimal from "../components/PostCardMinimal/PostCardMinimal"
import Pagination from "../components/Pagination/Pagination"
import {Layout, SpanishLayout} from "../components"
import {SEO} from "../components"
import { BlogPostsWrapper } from "./templates.style"

const BlogList = (props: any) => {
  const { data } = props
  const Posts = data.allMarkdownRemark.edges
  const { currentPage, numPages, lang } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/page/1" : `/page/${(currentPage - 1).toString()}`
  const nextPage = `/page/${(currentPage + 1).toString()}`
  const PrevLink = !isFirst && prevPage
  const NextLink = !isLast && nextPage
    const LayoutWrapper = lang === "es" ? SpanishLayout : Layout


    return (
    <LayoutWrapper>
      <SEO title={`Page ${currentPage}`} />

      <BlogPostsWrapper>
        {Posts.map(({ node }: any) => {
          return (
            <PostCardMinimal
              key={node.fields.slug}
              title={node.frontmatter.title || node.fields.slug}
              image={
                node.frontmatter.cover == null
                  ? null
                  : node.frontmatter.cover.childImageSharp.fluid
              }
              url={node.fields.slug}
              description={node.frontmatter.description || node.excerpt}
              date={node.frontmatter.date}
              tags={node.frontmatter.tags}
              lang={node.frontmatter.langKey}
            />
          )
        })}

        <Pagination
          prevLink={PrevLink}
          nextLink={NextLink}
          currentPage={`${currentPage}`}
          totalPage={`${numPages}`}
        />
      </BlogPostsWrapper>
    </LayoutWrapper>
  )
}

export default BlogList

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    sitePage {
      path
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD [<span>] MMMM [</span>]")
            title
            description
            tags
            langKey
            cover {
              childImageSharp {
                fluid(maxWidth: 170, maxHeight: 170, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
