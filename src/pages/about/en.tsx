import React from "react"
import { Layout } from "../../components"
import SEO from "../../components/Seo"
import AboutPage from "../../containers/AboutPage"
import { graphql, useStaticQuery } from "gatsby"
import en from "../../locales/en/Intro.json"

const Home: React.FunctionComponent = props => {
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
        description={en.about}
        title="Ulises Santana | JavaScript Engineer"
      />
      <AboutPage />
    </Layout>
  )
}

export default Home
