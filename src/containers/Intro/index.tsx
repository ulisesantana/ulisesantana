import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import {
  IntroWrapper,
  IntroImage,
  IntroTitle,
  Description,
  IntroInfo,
} from "./style"
import { SocialLinks } from "../../components"
import { userIntroInfo } from "../../hooks"
import en from "../../locales/en/Intro.json"
import es from "../../locales/es/Intro.json"
import { Language } from "../../types"

const translations = { en, es }

const Intro: React.FC<{ lang?: Language }> = ({ lang = "en" }) => {
  const { author, AuthorImage, Logo } = userIntroInfo()

  return (
    <IntroWrapper>
      <Link to={lang === "es" ? "/" : `/${lang}`}>
        <IntroImage>
          <div className="flip-container">
            <div className="flip-front">
              <Image fluid={AuthorImage} alt="author" />
            </div>
            <div className="flip-back no-print">
              <img src={Logo.src} alt={author} />
            </div>
          </div>
        </IntroImage>
      </Link>
      <IntroInfo>
        <IntroTitle>
          {translations[lang].greet} <b>{author}</b>
        </IntroTitle>
        <Description>{translations[lang].about}</Description>
        <SocialLinks />
      </IntroInfo>
    </IntroWrapper>
  )
}

export default Intro
