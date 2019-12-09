import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../containers/About"
import { Navbar } from "../components"
import { graphql, useStaticQuery } from "gatsby"

type AboutPageProps = {}

const AboutPage: React.FunctionComponent<AboutPageProps> = () => {
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
      <Navbar />
      <About />
    </Layout>
  )
}

export default AboutPage
