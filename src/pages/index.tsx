import React from "react"
import { SpanishLayout } from "../components"
import { SEO } from "../components"
import AboutPage from "../containers/AboutPage/index.es"
import es from "../locales/es/Intro.json"
import {graphql} from "gatsby";
import {getSrc} from "gatsby-plugin-image";

const Home: React.FunctionComponent = (props: any) => {
  const { siteUrl } = props.data.site.siteMetadata
  const metaImage = `${siteUrl}${getSrc(props.data.avatar)}`
  return (
    <SpanishLayout>
      <SEO
        description={es.about}
        title="Sobre mí"
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
    </SpanishLayout>
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
            gatsbyImageData            
          }
      }
  }
`
