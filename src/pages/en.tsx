import React from "react"
import { Layout } from "../components"
import { SEO } from "../components"
import AboutPage from "../containers/AboutPage"
import en from "../locales/en/Intro.json"
import {graphql} from "gatsby";

const Home: React.FunctionComponent = (props: any) => {
  const { siteUrl } = props.data.site.siteMetadata
  const metaImage = `${siteUrl}${props.data.avatar.childImageSharp.fluid.src}`
  return (
    <Layout>
      <SEO
        description={en.about}
        title="About me"
        meta={[
          { property: `og:type`, content: `website`},
          {property: 'og:image', content: metaImage},
          {property: 'og:url', content: siteUrl},
          {property: 'og:image:width', content: '1515'},
          {property: 'og:image:height', content: '1452'},
          {property: 'twitter:domain', content: siteUrl},
          {property: 'twitter:image', content: metaImage},
        ]}
      />
      <AboutPage />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
     avatar: file(absolutePath: { regex: "/author.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 210, maxHeight: 210, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
  }
`
