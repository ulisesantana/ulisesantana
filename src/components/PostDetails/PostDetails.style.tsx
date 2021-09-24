import styled from "styled-components"

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
  font-size: var(--font-size-4);
  font-weight: 700;
  color: var(--text-color);
  line-height: 1.53;
  margin-bottom: 10px;

  @media (max-width: 575px) {
    font-size: var(--font-size-3);
    margin-bottom: 15px;
  }
`

export const PostDate = styled.span`
  display: inline-block;
  font-size: var(--font-size-1);
  color: var(--text-color);
  font-weight: 400;
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
  font-size: var(--font-size-1);
  color: var(--text-color);
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
    background: linear-gradient(0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 255, 255, 0.01) 100%);
    padding: 16px;
    width: 100%;
    height: 25%;
    z-index: 50;
  }
`

export const PostDescription = styled.div`
  font-size: var(--font-size-3);

  a.gatsby-resp-image-link {
    border-bottom: none;
  }


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

  p, li, ol {
    margin-bottom: 2rem;

    strong {
      color: var(--black);
      background-color: var(--primary-color);
      padding: 8px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    margin: 2rem 0;
    
    a {
      border-bottom: 4px solid var(--link-color);
    }
  }

  h1 {
    font-size: var(--font-size-6);
  }

  h2 {
    font-size: var(--font-size-5);
  }

  h3 {
    font-size: var(--font-size-4);
  }

  h4 {
    font-size: var(--font-size-3);
  }

  h5 {
    font-size: var(--font-size-2);
  }

  h6 {
    font-size: var(--font-size-1);
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

  figcaption {
    text-align: center;
  }

  blockquote {
    background-color: var(--primary-color);
    color: var(--black);
    font-family: var(--font-family-2);
    font-size: var(--font-size-3);
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
      margin-bottom: 24px;
      width: 30px;
    }


    &:after {
      margin-bottom: 0;
    }

    p {
      font-size: var(--font-size-2);
      font-weight: 500;
      line-height: 2;
      margin: 1rem auto;
    }

    h4 {
      font-size: 16px;
      margin: 0;
      font-family: "Fira Sans", sans-serif;
      font-weight: 400;
    }

    small {
      font-style: italic;
      text-align: right;
    }

    a {
      border-bottom: solid 2px var(--secondary-color);
      color: var(--black);
    }
  }

  a, figcaption a {
    font-weight: 700;
    transition: 0.15s ease-in-out;
    color: var(--highlight-color);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 575px) {
    font-size: var(--font-size-1);

    h1 {
      font-size: var(--font-size-5);
    }

    h2 {
      font-size: var(--font-size-4);
    }

    h3 {
      font-size: var(--font-size-3);
    }

    h4 {
      font-size: var(--font-size-2);
    }

    h5 {
      font-size: var(--font-size-1);
    }

    h6 {
      font-size: var(--font-size-0);
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
    font-size: var(--font-size-2);
    font-weight: 400;
    color: var(--primary-color);
  }
`
