import SocialProfile from "./SocialProfile/SocialProfile"
import styled from "styled-components"
import replitLogo from "../images/replit.png"
import React, { FC } from "react"
import {
  FaTelegram,
  IoLogoGithub,
  FiCodesandbox,
  IoLogoTwitter,
  FaRegFileAlt,
} from "react-icons/all"
import {
  GITHUB_URL,
  REPLIT_URL,
  CODESANDBOX_URL,
  TELEGRAM_URL,
  TWITTER_URL,
  CV_URL,
} from "../constants"

interface IconProps {
  size?: number
  src: string
}

const Icon = styled.img(
  ({ size = 24 }: IconProps) => `
  filter: grayscale(100%);
  height: ${size}px
  margin: 0px;
  margin-bottom: -4px;
  padding: 0px;
  width: ${size}px

  @media print {
    height: 1rem;
    width: 1rem;
  }
`
)

const SocialMedia = [
  {
    icon: <IoLogoTwitter />,
    url: TWITTER_URL,
    tooltip: "Twitter",
  },
  {
    icon: <FaTelegram />,
    url: TELEGRAM_URL,
    tooltip: "Telegram",
  },
  {
    icon: <IoLogoGithub />,
    url: GITHUB_URL,
    tooltip: "Github",
  },
  {
    icon: <Icon src={replitLogo} />,
    url: REPLIT_URL,
    tooltip: "Repl.it",
  },
  {
    icon: <FiCodesandbox />,
    url: CODESANDBOX_URL,
    tooltip: "CodeSandbox",
  },
  {
    icon: <FaRegFileAlt />,
    url: CV_URL,
    tooltip: "Curriculum Vitae",
  },
]

export const SocialLinks: FC = () => <SocialProfile items={SocialMedia} />
