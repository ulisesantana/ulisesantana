import SocialProfile from "./SocialProfile/SocialProfile"
import React, {FC} from "react"
import {FaRegFileAlt, IoLogoGithub, IoLogoTwitter,} from "react-icons/all"
import {CV_URL, GITHUB_URL, TWITTER_URL,} from "../constants"


const SocialMedia = [
  {
    icon: <IoLogoTwitter />,
    url: TWITTER_URL,
    tooltip: "Twitter",
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
