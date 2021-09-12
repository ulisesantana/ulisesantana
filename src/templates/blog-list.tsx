import * as React from "react"
import { graphql } from "gatsby"
import PostCardMinimal from "../components/PostCardMinimal/PostCardMinimal"
import Pagination from "../components/Pagination/Pagination"
import { SEO, SpanishLayout } from "../components"
import { BlogPostsWrapper } from "./templates.style"
import Intro from "../containers/Intro"
import { SecTitle } from "../containers/BlogPage/Posts/style"
import en from "../locales/en/BlogPage.json"
import es from "../locales/es/BlogPage.json"
import Search from "../containers/SearchContainer/SearchContainer"

const translations = { en, es }

interface BlogListProps {
    data: {
        allMdx: {
            edges: Array<{
                node: {
                    excerpt: string
                    slug: string
                    frontmatter: {
                        date: string
                        title: string
                        description: string
                        tags: string
                        cover: string
                    }
                }
            }>
        }
    }
    pageContext: {
        currentPage: number
        numPages: number
        lang: 'en' | 'es'
    }
}

const BlogList = ({data, pageContext}: BlogListProps) => {
  const Posts = data.allMdx.edges
  const { currentPage, numPages, lang = "es" } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1
      ? "/blog"
      : `/page/${(currentPage - 1).toString()}`
  const nextPage = `/page/${(currentPage + 1).toString()}`
  const PrevLink = !isFirst && prevPage
  const NextLink = !isLast && nextPage

  return (
    <SpanishLayout>
      <SEO title={`Blog ${currentPage > 1 ? "Página " + currentPage : ""}`} />
      <Intro lang={lang} />
      <Search/>
      {/* <FeaturedPosts /> */}
      <BlogPostsWrapper>
        {currentPage === 1 && (
          <SecTitle>{translations[lang].latestPosts}</SecTitle>
        )}
        {Posts.map(({ node }: any) => {
          return (
            <PostCardMinimal
              className={node.frontmatter.draft ? 'draft' : ''}
              key={node.slug}
              title={node.frontmatter.title || node.slug}
              image={
                node.frontmatter.cover == null
                  ? null
                  : node.frontmatter.cover.childImageSharp.fluid
              }
              url={`/${node.slug}`}
              description={node.frontmatter.description || node.excerpt}
              date={node.frontmatter.date}
              tags={node.frontmatter.tags}
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
    </SpanishLayout>
  )
}

export default BlogList

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!, $draftDisabledList: [Boolean!]!) {
    site {
      siteMetadata {
        title
      }
    }
    sitePage {
      path
    }
    allMdx(
      filter: { frontmatter: { draft: { nin: $draftDisabledList } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          slug
          excerpt(pruneLength: 300)
          frontmatter {
            date
            title
            description
            draft
            tags
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
