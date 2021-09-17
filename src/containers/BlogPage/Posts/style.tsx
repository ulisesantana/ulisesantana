import styled from "styled-components"

const BlogPostsWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  .post_card {
    border-bottom: 16px solid transparent;
    margin-bottom: 54px;
    transition: ease all 0.3s;

    &:hover {
      border-bottom-color: var(--primary-color);
    }

    @media (max-width: 990px) {
      margin-bottom: 40px;
    }
    @media (max-width: 575px) {
      margin-bottom: 24px;
    }
  }
  @media (min-width: 990px) {
    width: 900px;
  }
  @media (min-width: 1200px) {
    width: 1050px;
  }
  @media (min-width: 1400px) {
    width: 1170px;
  }
  @media (max-width: 990px) {
    padding: 80px 45px 0 45px;
  }
  @media (max-width: 575px) {
    padding: 60px 25px 0 25px;
  }
`

export const SecTitle = styled.div`
  color: var(--text-color);
  font-size: var(--font-size-3);
  font-weight: 500;
  font-family: var(--font-family-1);
  letter-spacing: 0.17rem;
  position: relative;
  margin: 30px 0;

  &:after {
    content: "";
    width: 68px;
    height: 2px;
    background: var(--primary-color);
    display: block;
    margin-top: 8px;
  }
`

export default BlogPostsWrapper
