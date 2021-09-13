import {useEffect, useState} from "react";
import {darkTheme, lightTheme, Theme} from "./theme";

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
const getTheme = (darkMode: boolean) => darkMode ? {...darkTheme, isDark: darkMode} : {...lightTheme, isDark: darkMode}

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(getDarkModeCachedValue() ?? isDarkModeEnabled())
  const [theme, setTheme] = useState<Theme>(getTheme(darkMode))

  useEffect(() => {
    setDarkModeCachedValue(darkMode)
    setTheme(getTheme(darkMode))
  }, [darkMode])

  return {darkMode, setDarkMode, theme}
}
