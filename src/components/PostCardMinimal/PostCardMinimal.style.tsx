import styled from "styled-components"
import { themeGet } from "styled-system"

export const PostCardWrapper = styled.section`
  border-bottom: solid 8px transparent;
  position: relative;
  transition: 0.35s ease-in-out;
  &:hover {
    border-bottom-color: ${themeGet("colors.primary", "#F0DB4F")};
    .post_preview {
      transform: translateY(0);
    }
    .post_date {
      transform: translateY(100%);
    }
  }
`

export const PostPreview = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  transition: 0.35s ease-in-out;
  img {
    border-radius: 3px;
  }
  @media (max-width: 1024px) {
    transform: translateY(0);
  }
  @media (max-width: 575px) {
    margin-bottom: 16px;
    width: auto;
    height: auto;
    position: relative;
    transform: translateY(0);
  }
`

export const PostDetails = styled.div`
  display: flex;
  text-shadow: none;

  @media (max-width: 575px) {
    flex-direction: column;
  }
`

export const PostDate = styled.div`
  font-size: 90px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${themeGet("colors.textColor", "#292929")};
  transition: 0.35s ease-in-out;
  @media (max-width: 1200px) {
    font-size: 70px;
  }
  @media (max-width: 990px) {
    font-size: 56px;
  }
  @media (max-width: 575px) {
    display: none;
  }

  > span {
    font-size: 13px;
    font-weight: 400;
    display: block;
    margin-top: 12px;
    text-transform: uppercase;
  }
`

export const PostContent = styled.div`
  align-self: center;
`

export const PostTitle = styled.h2`
  font-size: ${themeGet("fontSizes.3", "34")}px;
  font-weight: 700;
  color: ${themeGet("colors.textColor", "#292929")};
  line-height: 1.53;
  //margin-bottom: 10px;
  font-family: "Fira Sans", sans-serif;
  a {
    color: ${themeGet("colors.textColor", "#292929")};
  }
  @media (max-width: 990px) {
    margin-bottom: 12px;
  }
  @media (max-width: 575px) {
    font-size: ${themeGet("fontSizes.2", "21")}px;
  }
`

export const Excerpt = styled.p`
  font-size: ${themeGet("fontSizes.2", "21")}px;
  color: ${themeGet("colors.textColor", "#292929")};
  font-weight: 400;
  line-height: 2;
  margin: 0;
`

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 15px;

  a {
    display: block;
    margin-right: 30px;
    font-size: 14px;
    font-weight: 400;
    color: blue;
    @media (max-width: 990px) {
      font-size: 13px;
      margin-right: 25px;
    }
  }
`

export const PostDateAndPreview = styled.div`
  position: relative;
  margin-right: 45px;
  flex-shrink: 0;
  overflow: hidden;
  height: 170px;
  width: 170px;
  @media (max-width: 1200px) {
    margin-right: 35px;
  }
  @media (max-width: 990px) {
    margin-right: 25px;
  }
  @media (max-width: 575px) {
    height: auto;
    width: auto;
  }

  @media (hover: none) {
    margin: 0;
    transform: translateY(0);
  }
`

export const ReadMore = styled.div`
  margin-top: 16px;
  a {
    font-size: 13px;
    font-weight: 500;
    color: blue;
    transition: 0.15s ease-in-out;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
