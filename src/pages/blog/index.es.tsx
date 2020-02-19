import React from "react"
import { SpanishLayout } from "../../components/Layout"
import SEO from "../../components/Seo"
import { BlogPageSpanish } from "../../containers/BlogPage"
import { graphql, useStaticQuery } from "gatsby"

type BlogPageProps = {}

const BlogPage: React.FunctionComponent<BlogPageProps> = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <SpanishLayout>
      <SEO
        description={site.siteMetadata.description}
        title="Ulises Santana | Full Stack Developer"
      />
      <BlogPageSpanish />
    </SpanishLayout>
  )
}

export default BlogPage
