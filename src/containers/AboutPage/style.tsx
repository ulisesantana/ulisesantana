import styled from "styled-components"
import { themeGet } from "styled-system"

export const AboutWrapper = styled.div`
  position: relative;
  padding: 0 75px 0 75px;
  @media (max-width: 990px) {
    padding: 80px 45px 30px 45px;
  }
  @media (max-width: 575px) {
    padding: 60px 25px 0 25px;
  }
`

export const AboutPageTitle = styled.div`
  text-align: justify;
  margin-bottom: 45px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
  h2 {
    font-size: 30px;
    font-weight: 700;
    color: ${themeGet("colors.textColor", "#292929")};
    line-height: 1.53;
    margin: 0;
    @media (max-width: 990px) {
      font-size: 26px;
    }
    @media (max-width: 767px) {
      font-size: 22px;
      margin: 0;
    }
  }
`

export const AboutImage = styled.div`
  height: 70%;
  margin-bottom: 3rem;
  text-align: center;

  span {
    padding-top: 16px;
    display: inline-block;
  }

  @media (max-width: 990px) {
    margin-bottom: 60px;
  }
  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`

export const AboutDetails = styled.div`
  width: 100%;
  max-width: 992px;
  margin: 0 auto;
  transition: all ease-in-out 0.6s;

  p {
    font-size: 1.5rem;
    line-height: 3rem;
    max-width: 960px;
  }

  .out {
    position: relative;
    width: 100vw;
    z-index: 1000;
  }

  blockquote {
    display: flex;
    flex-direction: column;
    background-color: ${themeGet("colors.primary", "#FFFFFF")};
    color: ${themeGet("colors.black", "#292929")};
    cursor: pointer;
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 600;
    position: relative;
    padding: 1rem;
    margin: 3rem 0;
    transition: all ease-in-out 0.6s;
    overflow: hidden;
    text-align: justify;

    section {
      max-width: 60%;
      margin: 0 auto;

      h2 {
        margin-bottom: 1rem;
      }
    }

    h3 {
      position: absolute;
      top: calc(50% - 2rem);
      left: 2.5rem;
      transform-origin: 0 0;
      transform: rotate(-270deg);
      background: none;
    }

    p {
      display: block;
      font-size: inherit;
      font-style: inherit;
      font-weight: inherit;
      line-height: 1.8rem;
      max-width: 960px;

      a {
        color: ${themeGet("colors.black", "#333")} !important;
      }
    }

    @media (max-width: 990px) {
      border-radius: 0;
      margin: 3rem -1.7rem;
      width: 100vw;

      h3 {
        display: none;
      }

      section {
        max-width: 90%;
      }
    }
  }

  .tldr-open,
  .tldr-closed {
    position: absolute;
  }

  .tldr-open {
    padding: 1rem;
    left: -5vw;
  }

  .tldr-closed {
    padding: 0;
    left: -100vw;
  }

  @media (min-width: 991px) {
    blockquote {
      width: 95vw;
    }
  }

  @media (max-width: 990px) {
    blockquote {
      width: 100vw;
    }
    .tldr-open {
      left: 3.3vw;
    }
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
    color: ${themeGet("colors.textColor", "#292929")};
    line-height: 1.53;
    margin: 0;
    @media (max-width: 990px) {
      font-size: 26px;
    }
    @media (max-width: 767px) {
      font-size: 22px;
      margin: 0;
    }
  }

  .space-between {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 1rem auto;
  }

  .flex-start {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin: 1rem auto;
  }

  button {
    display: block;
    background-color: ${themeGet("colors.primary", "#FFFFFF")};
    color: ${themeGet("colors.black", "#292929")};
    cursor: pointer;
    font-size: 1rem;
    font-style: italic;
    font-weight: 600;
    padding: 0.5rem;
    outline: none;
    margin: 1rem;

    @media (min-width: 1920px) {
      display: block;
    }

    @media (max-width: 1112px) {
      display: block;
    }
  }
`

export const SocialProfiles = styled.div`
  margin-top: 60px;
  position: relative;
  @media (max-width: 767px) {
    margin-top: 40px;
  }

  &:before {
    content: "";
    width: 30px;
    height: 1px;
    background: #292929;
    display: block;
    margin-bottom: 60px;
    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
  }
`
