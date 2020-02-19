import React from "react"
import { SpanishLayout } from "../components/Layout"
import SEO from "../components/Seo"
import AboutPage from "../containers/AboutPage/index.es"
import { graphql, useStaticQuery } from "gatsby"
import es from "../locales/es/Intro.json"

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
        description={es.about}
        title="Ulises Santana | JavaScript Engineer"
      />
      <AboutPage />
    </SpanishLayout>
  )
}

export default Home
