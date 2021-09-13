import React from "react"
import SimpleReactLightbox from "simple-react-lightbox";
import { ThemeProvider } from "styled-components"
import ScrollToTop from "react-scroll-up"
import { MDXProvider } from "@mdx-js/react"

import Footer from "./Footer/Footer"
import ScrollUpButton from "./ScrollUpButton/ScrollUpButton"
import ResetCss from "./resetCSS"
import { theme } from "../theme"
import { SocialLinks } from "./SocialLinks"
import Navbar from "./Navbar/Navbar"
import { Language } from "../types"
import ImageWithDescription from "./ImageWithDescription";
import {JavaScriptRepl} from "./JavaScriptRepl";

const BaseLayout = (lang: Language = "en"): React.FC<{ menu?: boolean }> => ({
  children,
  menu = true,
}) => (
  <ThemeProvider theme={theme}>
    <SimpleReactLightbox>
      <MDXProvider components={{ImageWithDescription, JavaScriptRepl}}>
        <ResetCss />
        {!!menu && <Navbar lang={lang} />}
        {children}
        <Footer>
          <SocialLinks/>
          <div>Copyright &copy; {new Date().getFullYear()}</div>
        </Footer>
        <ScrollToTop
          showUnder={300}
          duration={700}
          style={{ bottom: 30, right: 20 }}
        >
          <ScrollUpButton/>
        </ScrollToTop>
      </MDXProvider>
    </SimpleReactLightbox>
  </ThemeProvider>
)

export const Layout = BaseLayout()
export const SpanishLayout = BaseLayout("es")

export default Layout
