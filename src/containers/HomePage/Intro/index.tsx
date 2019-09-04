import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import {
  IntroWrapper,
  IntroImage,
  IntroTitle,
  Desciption,
  IntroInfo,
} from "./style"
import {SocialLinks} from "../../../components/SocialLinks";

type IntroProps = {}

const Intro: React.FunctionComponent<IntroProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 210, maxHeight: 210, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },
        easter: file(absolutePath: { regex: "/logo.png/" }) {
            childImageSharp {
                fluid(maxWidth: 210, maxHeight: 210, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        },
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  const { author, about } = Data.site.siteMetadata
  const AuthorImage = Data.avatar.childImageSharp.fluid
  const Logo = Data.easter.childImageSharp.fluid

  return (
    <IntroWrapper>
      <IntroImage>
        <div className="flip-container">
          <div className="flip-front">
            <Image fluid={AuthorImage} alt="author" />
          </div>
          <div className="flip-back">
            <img src={Logo.src} alt="It's me!" />
          </div>
        </div>
      </IntroImage>
      <IntroInfo>
        <IntroTitle>
          Hey! I’m <b>{author}</b>
        </IntroTitle>
        <Desciption>{about}</Desciption>
        <SocialLinks/>
      </IntroInfo>
    </IntroWrapper>
  )
}

export default Intro
