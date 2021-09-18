import styled from "styled-components"

export const AboutWrapper = styled.main`
  position: relative;
  padding: 0 75px 0 75px;
  @media (max-width: 990px) {
    padding: 80px 45px 30px 45px;
  }
  @media (max-width: 575px) {
    padding: 0;
  }
`

export const AboutPageTitle = styled.header`
  text-align: justify;
  margin-bottom: 45px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
  h2 {
    font-size: 30px;
    font-weight: 700;
    color: var(--highlight-color);
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

export const AboutDetails = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 960px;
  transition: all ease-in-out 0.6s;

  p {
    font-size: 120%;
    line-height: 2rem;
  }

  .out {
    position: relative;
    width: 100%;
    z-index: 10;
  }

  blockquote {
    color: var(--black);
    display: flex;
    flex-direction: column;
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
        color: inherit;
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
        color: var(--secondary-color) !important;
      }
    }

    @media (max-width: 990px) {
      border-radius: 0;
      margin: 3rem -1.7rem;

      h3 {
        display: none;
      }

      section {
        max-width: 90%;
      }
    }
  }

  @media (min-width: 991px) {
    blockquote {
      width: 95vw;
    }
  }

  @media (max-width: 990px) {
    blockquote {
      width: 100%;
    }
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
    color: var(--text-color);
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
    background: var(--text-color);
    display: block;
    margin-bottom: 60px;
    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
  }
`
