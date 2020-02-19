import React from "react"
import { Link } from "gatsby"
import { Language } from "../types"

const LanguageMenu = ({ lang }: { lang: Language }) => {
  return (
    <div style={{ display: "inline-block", fontSize: "36px" }}>
      {lang === "es" && <Link to={"/"}>🇬🇧</Link>}
      {lang === "en" && <Link to={"/es"}>🇪🇸</Link>}
    </div>
  )
}

export default LanguageMenu
