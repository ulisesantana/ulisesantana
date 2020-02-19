import React from "react"
import { SpanishLayout } from "../../components/Layout"
import SEO from "../../components/Seo"
import { BlogPageSpanish } from "../../containers/BlogPage"
import { graphql, useStaticQuery } from "gatsby"
import es from "../../locales/es/Intro.json"

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
        description={es.about}
        title="Ulises Santana | JavaScript Engineer"
      />
      <BlogPageSpanish />
    </SpanishLayout>
  )
}

export default BlogPage
