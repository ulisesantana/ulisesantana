import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar/Navbar"
import ResetCss from "../components/resetCSS"
import SEO from "../components/Seo"
import NotFound from "../containers/NotFound"
import Footer from "../components/Footer/Footer"
import { SocialLinks } from "../components/SocialLinks"

const NotFoundPage = () => {
  const [lang] =
    typeof window !== "undefined"
      ? window.navigator.language.split("-")
      : ["es"]
  return (
    <>
      <ResetCss />
      <Navbar lang={lang} />
      <SEO title="404: Not Found" />
      <NotFound lang={lang} />
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
      }
    }
  }
`
