import SocialProfile from "./SocialProfile/SocialProfile"
import React, { FC } from "react"
import {
  FaTelegram,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  FaRegFileAlt,
} from "react-icons/all"
import {
  GITHUB_URL,
  INSTAGRAM_URL,
  TELEGRAM_URL,
  TWITTER_URL,
  CV_URL,
} from "../constants"

const SocialMedia = [
  {
    icon: <IoLogoInstagram />,
    url: INSTAGRAM_URL,
    tooltip: "Instagram",
  },
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
    icon: <FaRegFileAlt />,
    url: CV_URL,
    tooltip: "Curriculum Vitae",
  },
]

export const SocialLinks: FC = () => <SocialProfile items={SocialMedia} />
