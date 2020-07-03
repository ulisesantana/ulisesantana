import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar/Navbar"
import ResetCss from "../components/resetCSS"
import {SEO} from "../components"
import NotFound from "../containers/NotFound"
import Footer from "../components/Footer/Footer"
import { SocialLinks } from "../components/SocialLinks"

const NotFoundPage = () => {
  return (
    <>
      <ResetCss />
      <Navbar />
      <SEO title="404: Not Found" />
      <NotFound />
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
