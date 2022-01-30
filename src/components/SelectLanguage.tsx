import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"
import {Language} from "../types"
import {GatsbyImage} from "gatsby-plugin-image";

export const SelectLanguage = ({ lang }: { lang: Language }) => {
  const data = useStaticQuery(graphql`
    {
      enFlag: file(absolutePath: { regex: "/en.png/" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      esFlag: file(absolutePath: { regex: "/canary-islands.png/" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)
  return (
    <div style={{ display: "inline-block", fontSize: "36px" }}>
      {lang === "es" && <Link to={"/en"}>
        <GatsbyImage
          image={data.enFlag.childImageSharp.gatsbyImageData}
          alt="English flag"
        />
      </Link>}
      {lang === "en" && <Link to={"/"}>
        <GatsbyImage
          image={data.esFlag.childImageSharp.gatsbyImageData}
          alt="Bandera canaria"
        />
      </Link>}
    </div>
  )
}

export default SelectLanguage
