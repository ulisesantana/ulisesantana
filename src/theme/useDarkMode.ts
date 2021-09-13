import {useEffect, useState} from "react";
import {darkTheme, lightTheme, Theme} from "./theme";

const themeKey = 'theme'
enum ThemeMode {
  Dark = 'dark',
  Light = 'light'
}

const isDarkModeEnabled = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const setDarkModeCachedValue = (value: boolean) => window.localStorage.setItem(themeKey, value ? ThemeMode.Dark : ThemeMode.Light)
const getTheme = (darkMode: boolean) => darkMode ? {...darkTheme, isDark: darkMode} : {...lightTheme, isDark: darkMode}
const getDarkModeCachedValue = () => {
  const state = window.localStorage.getItem(themeKey)
  if (state !== null) {
    return state === ThemeMode.Dark
  }
  return state
}

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false)
  const [theme, setTheme] = useState<Theme>(getTheme(darkMode))

  useEffect(() => {
    setDarkMode(getDarkModeCachedValue() ?? isDarkModeEnabled())
  }, [])
  useEffect(() => {
    setDarkModeCachedValue(darkMode)
    setTheme(getTheme(darkMode))
  }, [darkMode])

  return {darkMode, setDarkMode, theme}
}
