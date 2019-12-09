import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePage from "../containers/HomePage"
import { graphql, useStaticQuery } from "gatsby"

const Home: React.FunctionComponent = () => {
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

      <HomePage />
    </Layout>
  )
}

export default Home
