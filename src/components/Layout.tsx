import React from "react"
import SimpleReactLightbox from "simple-react-lightbox";
import ScrollToTop from "react-scroll-up"
import {MDXProvider} from "@mdx-js/react"

import Footer from "./Footer/Footer"
import ScrollUpButton from "./ScrollUpButton/ScrollUpButton"
import {SocialLinks} from "./SocialLinks"
import Navbar from "./Navbar/Navbar"
import {Language} from "../types"
import ImageWithDescription from "./ImageWithDescription";
import {JavaScriptRepl} from "./JavaScriptRepl";
import {GlobalStyle} from "../theme";

const BaseLayout = (lang: Language = "en"): React.FC<{ menu?: boolean }> => ({
  children,
  menu = true,
}) => (
    <SimpleReactLightbox>
      <MDXProvider components={{ImageWithDescription, JavaScriptRepl}}>
        <GlobalStyle/>
        {!!menu && <Navbar lang={lang}/>}
        {children}
        <Footer>
          <SocialLinks/>
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </Footer>
        <ScrollToTop
          showUnder={300}
          duration={700}
          style={{bottom: 30, right: 20}}
        >
          <ScrollUpButton/>
        </ScrollToTop>
      </MDXProvider>
    </SimpleReactLightbox>
  )

export const Layout = BaseLayout()
export const SpanishLayout = BaseLayout("es")

export default Layout
