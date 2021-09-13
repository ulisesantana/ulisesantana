import React from "react"
import Navbar from "../components/Navbar/Navbar"
import ResetCss from "../components/resetCSS"
import { SEO } from "../components"
import NotFound from "../containers/NotFound"
import Footer from "../components/Footer/Footer"
import { SocialLinks } from "../components/"
import { Language } from "../types"
import {graphql} from "gatsby";

const NotFoundPage = (props: any) => {
  const {siteUrl} = props.data.site.siteMetadata
  const metaImage = `${siteUrl}${props.data.avatar.childImageSharp.fluid.src}`
  const [lang] =
    typeof window !== "undefined"
      ? ((window.navigator.language.split("-") as unknown) as Language)
      : ["es" as Language]
  return (
    <>
      <ResetCss />
      <Navbar lang={lang as Language} />
      <SEO
        title="404: Not Found"
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
      <NotFound lang={lang as Language} />
      <Footer>
        <SocialLinks />
        <div>Copyright &copy; {new Date().getFullYear()}</div>
      </Footer>
    </>
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
          fluid(cropFocus: CENTER, maxWidth: 210, maxHeight: 210, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
  }
`
