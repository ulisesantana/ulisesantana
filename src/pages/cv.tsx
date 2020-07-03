import React from "react"
import Layout from "../components"
import SEO from "../components/Seo"
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
    <Layout menu={false}>
      <SEO
        description={site.siteMetadata.description}
        title="Ulises Santana | JavaScript Engineer"
      />
      <CVPage />
    </Layout>
  )
}

export default CV
