import React from "react"
import {SEO} from "../components"
import {Layout as EnglishLayout, SpanishLayout} from '../components/Layout'
import NotFound from "../containers/NotFound"
import {Language} from "../types"
import {graphql} from "gatsby";
import {getSrc} from "gatsby-plugin-image";

const NotFoundPage = (props: any) => {
  const {siteUrl} = props.data.site.siteMetadata
  const metaImage = `${siteUrl}${getSrc(props.data.avatar)}`
  const [lang] =
    typeof window !== "undefined"
      ? ((window.navigator.language.split("-") as unknown) as Language)
      : ["es" as Language]
  const Layout = lang === 'es' ? SpanishLayout : EnglishLayout
  return (
    <Layout>
      <SEO
        title="404: Not Found"
        meta={[
          {property: `og:type`, content: `website`},
          {property: 'og:image', content: metaImage},
          {property: 'og:image:url', content: metaImage},
          {property: 'og:url', content: siteUrl},
          {property: 'og:image:width', content: '1515'},
          {property: 'og:image:height', content: '1452'},
          {property: 'twitter:domain', content: siteUrl},
          {property: 'twitter:image', content: metaImage},
        ]}
      />
      <NotFound lang={lang as Language}/>
    </Layout>
  )
}

export default NotFoundPage

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
