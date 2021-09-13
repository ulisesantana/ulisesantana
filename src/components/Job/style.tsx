import styled from "styled-components"
import { themeGet } from "../../theme"

export const JobWrapper = styled.article`
  padding: 4px;
  width: 100%;

  h3 {
    color: ${themeGet("secondary", "blue")};
    font-weight: 600;
    font-size: 1.25rem;
    margin: 1rem 0;
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

  @media print, screen and (max-width: 575px) {
    h3 {
      font-size: 1rem;
    }

    hr {
      margin: 48px auto;
    }
  }
`
