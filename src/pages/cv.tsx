import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CVPage from "../containers/CVPage"
import { graphql, useStaticQuery } from "gatsby"

type CVProps = {}

const CV: React.FunctionComponent<CVProps> = () => {
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
        title="Ulises Santana | JavaScript Engineer"
      />
      <CVPage />
    </Layout>
  )
}

export default CV
