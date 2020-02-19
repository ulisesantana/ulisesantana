import { useTranslation } from "react-i18next"
import { useEffect } from "react"

function effect(i18n: any) {
  if (
    i18n &&
    i18n.language === null &&
    typeof i18n.changeLanguage === "function"
  ) {
    i18n.changeLanguage("es")
  } else {
    const t = setTimeout(effect, 250, i18n)
    return () => {
      clearTimeout(t)
    }
  }
  console.log("i18n", i18n.language)
}

export function useSpanish() {
  const { i18n } = useTranslation()

  useEffect(() => effect(i18n), [])
}
