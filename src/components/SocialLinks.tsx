import SocialProfile from "./SocialProfile/SocialProfile";
import React, {FC} from "react";
import {FaTelegram, IoLogoGithub, IoLogoInstagram, IoLogoTwitter} from "react-icons/all";
import {GITHUB_URL, INSTAGRAM_URL, TELEGRAM_URL, TWITTER_URL} from "../constants";

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
]

export const SocialLinks: FC = () => <SocialProfile items={SocialMedia} />;
