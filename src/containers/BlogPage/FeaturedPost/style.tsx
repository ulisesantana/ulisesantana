import styled from "styled-components"

export const FeaturedPostWrapper = styled.div`
  margin: 0 auto;
  padding: 0 75px 0 75px;
  position: relative;

  @media (max-width: 1400px) {
    padding: 0 35px 0 35px;
  }
  @media (max-width: 990px) {
    padding: 0 25px 0 25px;
  }
`

export const FeaturedPostRow = styled.div`
  margin: 0 -15px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    margin: 0 -10px;
  }
`

export const FeaturedPostCol = styled.div`
  max-width: 16.6666666667%;
  flex: 0 0 16.6666666667%;
  float: left;
  padding: 0 15px;
  @media (max-width: 1024px) {
    padding: 0 10px;
    max-width: 33.3333333%;
    flex: 0 0 33.3333333%;
    margin-bottom: 20px;
  }
  @media (max-width: 767px) {
    max-width: 100%;
    flex: 0 0 100%;
    margin-bottom: 30px;
  }
`

export const SecTitle = styled.div`
  color: var(--text-color);
  font-size: 16px;
  font-weight: 500;
  font-family: var(--font-family-1);
  letter-spacing: 0.17rem;
  position: relative;
  margin-bottom: 30px;

  &:after {
    content: "";
    width: 68px;
    height: 2px;
    background: var(--primary-color);
    display: block;
    margin-top: 8px;
  }
`
