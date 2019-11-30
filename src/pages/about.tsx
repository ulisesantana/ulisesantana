import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../containers/About"
import {graphql, useStaticQuery} from "gatsby";

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
  );

  return (
    <Layout>
      <SEO
        description={site.siteMetadata.description}
        title="Ulises Santana | Full Stack Developer"
      />

      <About />
    </Layout>
  )
};

export default AboutPage
