import React from "react"
import Navbar from "../components/Navbar/Navbar"
import ResetCss from "../components/resetCSS"
import {SEO} from "../components"
import NotFound from "../containers/NotFound"
import Footer from "../components/Footer/Footer"
import { SocialLinks } from "../components/"
import { Language } from "../types"

const NotFoundPage = () => {
  const [lang] =
    typeof window !== "undefined"
      ? ((window.navigator.language.split("-") as unknown) as Language)
      : ["es" as Language]
  return (
    <>
      <ResetCss />
      <Navbar lang={lang as Language} />
      <SEO title="404: Not Found" />
      <NotFound lang={lang as Language} />
      <Footer>
        <SocialLinks />
        <div>Copyright &copy; {new Date().getFullYear()}</div>
      </Footer>
    </>
  )
}

export default NotFoundPage
