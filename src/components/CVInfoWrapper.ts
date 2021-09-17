import styled from "styled-components"

export const CVInfoWrapper = styled.div`
  align-items: flex-start;
  color: var(--tag-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .info-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    width: 100%;
  }

  .info-position,
  .info-date {
    font-weight: 700;
  }

  .info-date,
  .info-employer,
  .info-location {
    align-items: center;
    display: inline-flex;
    flex-direction: row;

    span {
      font-size: 1rem;
      font-weight: 400;
      padding: 4px;
      padding-left: 0;
    }
  }

  @media (max-width: 1200px) {
  }
  @media (max-width: 990px) {
  }
  @media screen and (max-width: 575px) {
    .info-title {
      margin-bottom: 0.5rem;
    }
    .info-position,
    .info-location span,
    .info-employer span,
    .info-date span {
      font-size: 0.9rem;
    }
    .info-position,
    .info-date {
      font-size: 1rem;
      font-weight: 700;
    }
  }
`
