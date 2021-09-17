import styled from "styled-components"

const FooterWrapper = styled.footer`
  position: relative;
  overflow: hidden;
  color: var(--text-color);
  padding: 30px 15px;
  text-align: center;
  border-top: 1px solid var(--highlight-color);
  margin-top: 120px;
  
  @media (max-width: 1200px) {
    margin-top: 90px;
  }
  @media (max-width: 990px) {
    margin-top: 90px;
  }
  @media (max-width: 575px) {
    margin-top: 60px;
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
