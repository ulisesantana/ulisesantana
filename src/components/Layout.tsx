import React, {useContext, useEffect, useState} from "react"
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
import {ThemeContext} from "styled-components";
import {useStyledDarkMode} from "gatsby-styled-components-dark-mode";

enum ThemeMode {
  Dark = 'dark',
  Light = 'light'
}

const isDarkModeEnabled = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const getDarkModeCachedValue = () => {
  const state = window.localStorage.getItem('theme')
  if (state !== null) {
    return state === ThemeMode.Dark
  }
  return state
}
const setDarkModeCachedValue = (value: boolean) => window.localStorage.setItem('theme', value ? ThemeMode.Dark : ThemeMode.Light)

const BaseLayout = (lang: Language = "en"): React.FC<{ menu?: boolean }> => ({
  children,
  menu = true,
}) => {
  const [darkMode, setDarkMode] = useState(getDarkModeCachedValue() ?? isDarkModeEnabled())
  const { toggleDark } = useStyledDarkMode();
  const theme = useContext(ThemeContext);

  useEffect(() => toggleDark(darkMode), [])
  useEffect(() => {
    setDarkModeCachedValue(darkMode)
    toggleDark(darkMode)
  }, [darkMode])
  return (
    <SimpleReactLightbox>
      <MDXProvider components={{ImageWithDescription, JavaScriptRepl}}>
        <GlobalStyle theme={theme} didAppLoad={theme.didLoad}/>
        {!!menu && <Navbar lang={lang} isDark={darkMode} themeHandler={setDarkMode}/>}
        {children}
        <Footer>
          <SocialLinks/>
          <div>Copyright &copy; {new Date().getFullYear()}</div>
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
}

export const Layout = BaseLayout()
export const SpanishLayout = BaseLayout("es")

export default Layout
