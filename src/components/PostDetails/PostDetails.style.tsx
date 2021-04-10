import styled from "styled-components"
import { themeGet } from "styled-system"

export const PostDetailsWrapper = styled.section`
  position: relative;

  &.image_left {
    @media (min-width: 991px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
    }
    .post_preview {
      margin-top: 0;
      @media (min-width: 991px) {
        flex: 0 0 42%;
        max-width: 42%;
        padding-right: 60px;
        margin: 0;
        &:before {
          width: calc(80% - 60px);
        }
      }
    }
    .post_des_wrapper {
      @media (min-width: 991px) {
        flex: 0 0 58%;
        max-width: 58%;
        margin: 0;
      }
      .post_des {
        margin-top: 60px;
      }
    }
  }
`

export const PostTitle = styled.h1`
  font-size: ${themeGet("fontSizes.4", "41")}px;
  font-weight: 700;
  color: ${({ color }) => color || themeGet("colors.textColor", "#292929")};
  line-height: 1.53;
  margin-bottom: 10px;
  
  @media (max-width: 575px) {
    font-size: ${themeGet("fontSizes.3", "34")}px;
    margin-bottom: 15px;
  }
`

export const PostDate = styled.span`
  display: inline-block;
  font-size: ${themeGet("fontSizes.1", "16")}px;
  color: ${({ color }) => color || themeGet("colors.textColor", "#292929")};
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 2rem;
  
  &:after {
    content: '·';
    padding: 0 8px;
  }
  
  @media (max-width: 575px) {
    font-size: 13px;
  }
`

export const PostReadTime = styled.span`
  display: inline-block;
  font-size: ${themeGet("fontSizes.1", "16")}px;
  color: ${({ color }) => color || themeGet("colors.textColor", "#292929")};
  font-weight: 400;
  margin-top: 0.4rem;
  
  @media (max-width: 575px) {
    font-size: 13px;
  }
`

export const PostPreview = styled.div`
  margin-top: 45px;
  position: relative;
  @media (max-width: 1200px) {
    margin-top: 40px;
  }
  @media (max-width: 575px) {
    margin-top: 35px;
  }

  img {
    border-radius: 3px;
  }

  .post-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(255, 255, 255, 0.01) 100%
    );
    padding: 16px;
    width: 100%;
    height: 25%;
    z-index: 50;
  }

  &:before {
    content: "";
    position: absolute;
    width: 80%;
    height: 80%;
    background-color: #757575;
    bottom: 0;
    left: 10%;
    filter: blur(15px);
  }
`

export const PostDescription = styled.div`
  font-size: ${themeGet("fontSizes.2", "18")}px;

  .badge {
    display: block;
    width: 96px;

    p,
    img {
      padding: 0;
      margin: 0;
    }

    & + div > pre {
      margin-top: 0;
    }
  }

  .mermaid {
    margin-bottom: 60px;
  }

  p {
    margin-bottom: 2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    margin-bottom: 0.75rem;
  }

  h1 {
    font-size: ${themeGet("fontSizes.6", "48")}px;
    margin-bottom: 0.75rem;
  }

  h2 {
    font-size: ${themeGet("fontSizes.5", "41")}px;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: ${themeGet("fontSizes.4", "34")}px;
  }

  h4 {
    font-size: ${themeGet("fontSizes.3", "21")}px;
  }

  h5 {
    font-size: ${themeGet("fontSizes.2", "18")}px;
  }

  h6 {
    font-size: ${themeGet("fontSizes.1", "16")}px;
  }

  ol,
  ul {
    margin-left: 1.5rem;
    margin-bottom: 2rem;
    line-height: 2;
  }

  li {
    margin-bottom: 0.45rem;

    p {
      margin-bottom: 1rem;
    }
  }

  details summary::-webkit-details-marker {
    display: none;
  }

  details > summary {
    background-color: ${themeGet("colors.primary", 'yellow')};
    align-content: center;
    cursor: pointer;
    display: flex;
    font-size: ${themeGet("fontSizes.2", "21")}px;
    font-weight: bold;
    justify-content: center;
    text-align: center;
    width: 6rem;
  }

  details[open] summary ~ * {
    animation: slide-in .5s ease-in-out;
  }

  @keyframes slide-in {
    0%    {opacity: 0; margin-left: -100%; margin-right: 100%}
    100%  {opacity: 1; margin-left: 0px; margin-right: 0px}
  }
  
  details > blockquote, blockquote {
    background-color: ${themeGet("colors.primary", 'yellow')};
    font-family: "Poppins", sans-serif;
    font-size: ${themeGet("fontSizes.2", "18")}px;
    padding: 16px;
    font-weight: 500;
    line-height: 2;
    margin: 32px 0;
    
    &:before,
    &:after {
      background: #292929;
      content: "";
      display: block;
      height: 1px;
      margin-bottom: 60px;
      width: 30px;
    }

    p {
      font-size: ${themeGet("fontSizes.1", "18")}px;
      font-weight: 500;
      line-height: 2;
      margin-bottom: 23px;
      
    }
    h4 {
      font-size: 16px;
      margin: 0;
      font-family: "Fira Sans", sans-serif;
      font-weight: 400;
    }
  }

  details > blockquote {
    margin-top: 0px;
  }

  a {
    font-weight: 500;
    transition: 0.15s ease-in-out;
    color: ${themeGet("textColor", "black")};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 575px) {
    font-size: ${themeGet("fontSizes.0", "16")}px;

    details > summary {
      font-size: ${themeGet("fontSizes.1", "18")}px;
      font-weight: bold;
      width: 4rem;
    }

    details > blockquote, blockquote {
      font-size: ${themeGet("fontSizes.0", "16")}px;
      margin: 16px 0;
      
      p {
        font-size: ${themeGet("fontSizes.0", "16")}px;
      }
    }
    
    details > blockquote {
      margin-top: 0px;
    }
  }
  
`

export const PostDescriptionWrapper = styled.div`
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  width: 960px;
  max-width: 100%;
  @media (max-width: 1200px) {
    margin-top: 70px;
  }
  @media (max-width: 575px) {
    margin-top: 30px;
  }
`

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 60px;

  a {
    display: block;
    margin-right: 30px;
    font-size: ${themeGet("fontSizes.1", "18")}px;
    font-weight: 400;
    color: ${themeGet("primary", "yellow")};
  }
`
