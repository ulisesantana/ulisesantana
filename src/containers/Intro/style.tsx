import styled from "styled-components"
import { themeGet } from "styled-system"

export const IntroWrapper = styled.div`
  width: 940px;
  max-width: 100%;
  margin: 0 auto;
  padding: 75px 10px 75px 10px;
  display: flex;
  align-items: center;
  @media (max-width: 1400px) {
    padding: 0 10px 60px 10px;
  }
  @media (max-width: 1200px) {
    padding: 0 10px 50px 10px;
  }
  @media (max-width: 990px) {
    padding: 0 25px 40px 25px;
  }
  @media (max-width: 575px) {
    display: block;
    padding: 0;
    text-align: center;
  }
`

export const IntroImage = styled.div`
  background-color: transparent;
  width: 270px;
  height: 270px;
  padding: 30px;
  border-radius: 50%;
  margin: 0 auto;
  border: 1px solid ${themeGet("colors.lightBorderColor", "#ededed")};
  flex-shrink: 0;
  perspective: 1000px;

  @media (max-width: 990px) {
    width: 220px;
    height: 220px;
    padding: 25px;
    margin-bottom: 25px;
  }
  @media (max-width: 767px) {
    width: 180px;
    height: 180px;
    padding: 20px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 50%;
  }

  .flip-container {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  &:hover .flip-container,
  &:active .flip-container {
    transform: rotateY(180deg);

    .flip-front {
      opacity: 0;
    }
  }

  .flip-front,
  .flip-back {
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: opacity ease-in-out 0.6s;
  }

  .flip-back {
    transform: rotateY(180deg);
  }
`

export const IntroTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
  font-family: ${themeGet("fontFamily.1", "'Poppins', sans-serif")};
  color: ${themeGet("colors.black", "#292929")};
  margin-bottom: 20px;
  @media (max-width: 990px) {
    font-size: 26px;
    margin-bottom: 15px;
  }
  @media (max-width: 575px) {
    font-size: 22px;
    margin: 0;
  }
`

export const Desciption = styled.p`
  color: ${themeGet("colors.textColor", "#292929")};
  font-size: 1.5rem;
  line-height: 2rem;

  @media (max-width: 575px) {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0.5rem auto;
  }
`

export const IntroInfo = styled.div`
  padding-left: 30px;
  @media (max-width: 575px) {
    padding-left: 0;
  }
`
