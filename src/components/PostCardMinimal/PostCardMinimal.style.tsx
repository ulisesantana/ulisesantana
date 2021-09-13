import styled from "styled-components"
import { themeGet } from "../../theme"

export const PostCardWrapper = styled.section`
  border-bottom: solid 8px transparent;
  position: relative;
  transition: 0.35s ease-in-out;

  &:hover {
    border-bottom-color: ${themeGet("primary")};

    .post_preview {
      transform: translateY(0);
    }

    .post_date {
      transform: translateY(100%);
    }
  }

  &.draft {
    background: repeating-linear-gradient(45deg,
    ${themeGet('primary')},
    ${themeGet('primary')} 10px,
    ${themeGet('primaryHover')} 10px,
    ${themeGet('primaryHover')} 20px);
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

export const PostContent = styled.div`
  align-self: center;
`

export const PostTitle = styled.h2`
  font-size: ${themeGet("fontSizes.3")}px;
  font-weight: 700;
  color: ${themeGet("textColor")};
  line-height: 1.53;
  //margin-bottom: 10px;
  font-family: "Fira Sans", sans-serif;
  a {
    color: ${themeGet("textColor")};
  }
  @media (max-width: 990px) {
    margin-bottom: 12px;
  }
  @media (max-width: 575px) {
    font-size: ${themeGet("fontSizes.2")}px;
  }
`

export const Excerpt = styled.p`
  font-size: ${themeGet("fontSizes.0")}px;
  color: ${themeGet("textColor")};
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
    color: ${props => themeGet(props.theme.isDark ? 'primary' : 'secondary')};
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
    color: ${props => themeGet(props.theme.isDark ? 'primary' : 'secondary')};
    transition: 0.15s ease-in-out;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
