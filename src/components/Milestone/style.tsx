import styled from "styled-components"
import { themeGet } from "styled-system"

export const MilestoneWrapper = styled.article`
  display: block;
  padding: 4px;
  margin-bottom: 4rem;
  max-width: 300px;
  width: 100%;

  h3 {
    color: ${themeGet("colors.secondary", "blue")};
    font-size: 1.25rem;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 1.5rem;
    margin-top: 0.5rem;
    line-height: 2rem;
  }

  hr {
    background-color: lightgray;
    border: none;
    border-radius: 20px;
    height: 4px;
    margin: 48px auto;
    width: 50%;
  }

  &:last-child {
    margin-bottom: 3rem;
    hr {
      display: none;
    }
  }

  .center {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 575px) {
    h3 {
      font-size: 1rem;
    }
  }

  @media print {
    margin-bottom: 1rem;
    max-width: 45vw;
  }
`
