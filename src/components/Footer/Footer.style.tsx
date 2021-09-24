import styled from "styled-components"

const FooterWrapper = styled.footer`
  color: var(--text-color);
  margin: 0 auto;
  max-width: 940px;
  overflow: hidden;
  padding: 30px 15px;
  position: relative;
  text-align: center;
  
  .bar {
    border-top: 4px solid var(--link-color);
    display: block;
    margin: 48px auto;
    width: 50%;
  }
  
  @media (max-width: 1200px) {
    .bar {
      margin: 48px auto;
    }
  }
  @media (max-width: 990px) {
    .bar {
      margin: 0 auto 48px;
    }
  }
  @media (max-width: 575px) {
    .bar {
      margin: 0 auto 32px;
    }
    padding: 22px 15px;
  }

  a {
    color: var(--link-color);
    transition: 0.15s ease-in-out;
  }
  
  p {
    font-size: 0.75rem;
    margin: 0 auto;
    text-align: center;
  }
`

export default FooterWrapper
