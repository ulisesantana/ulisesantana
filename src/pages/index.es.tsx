import React from "react"
import { SpanishLayout } from "../components/Layout"
import SEO from "../components/Seo"
import AboutPage from "../containers/AboutPage/index.es"
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
    <SpanishLayout>
      <SEO
        description={site.siteMetadata.description}
        title="Ulises Santana | Full Stack Developer"
      />
      <AboutPage />
    </SpanishLayout>
  )
}

export default Home
