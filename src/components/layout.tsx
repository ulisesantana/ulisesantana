import React from "react"
import { ThemeProvider } from "styled-components"
import ScrollToTop from "react-scroll-up"

import Footer from "./Footer/Footer"
import ScrollUpButton from "./ScrollUpButton/ScrollUpButton"
import ResetCss from "./resetCSS"
import { theme } from "../theme"
import { SocialLinks } from "./SocialLinks"
import Navbar from "./Navbar/Navbar"
import { Language } from "../types"

const BaseLayout = (lang: Language = "en"): React.FC<{ menu?: boolean }> => ({
  children,
  menu = true,
}) => (
  <ThemeProvider theme={theme}>
    <>
      <ResetCss />
      {!!menu && <Navbar lang={lang} />}
      {children}
      <Footer>
        <SocialLinks />
        <div>Copyright &copy; {new Date().getFullYear()}</div>
      </Footer>
      <ScrollToTop
        showUnder={300}
        duration={700}
        style={{ bottom: 30, right: 20 }}
      >
        <ScrollUpButton />
      </ScrollToTop>
    </>
  </ThemeProvider>
)

export const SpanishLayout = BaseLayout("es")
export const Layout = BaseLayout()

export default Layout
