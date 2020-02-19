import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import Blog from "../../containers/BlogPage"
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
    <Layout>
      <SEO
        description={site.siteMetadata.description}
        title="Ulises Santana | Full Stack Developer"
      />
      <Blog />
    </Layout>
  )
}

export default BlogPage
