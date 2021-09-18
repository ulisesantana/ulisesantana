import React, {FC} from "react";
import styled from "styled-components";

const TLDRStyle = styled.details`
  color: var(--black);

  & > summary {
    background-color: var(--primary-color);
    cursor: pointer;
    font-size: var(--font-size-3);
    font-weight: bold;
    text-align: center;
    width: 6rem;
  }

  &[open] summary ~ * {
    animation: slide-in .5s ease-in-out;
  }

  @keyframes slide-in {
    0% {
      opacity: 0;
      margin-left: -100%;
      margin-right: 100%
    }
    100% {
      opacity: 1;
      margin-left: 0;
      margin-right: 0;
    }
  }

  & > :not(summary) {
    background-color: var(--primary-color);
    padding: 16px;

  }

  & > blockquote {
    margin-top: 0;
  }


  @media (max-width: 575px) {
    & > summary {
      font-size: var(--font-size-2);
      font-weight: bold;
      width: 5rem;
    }

    & > blockquote, blockquote {
      font-size: var(--font-size-1);
      margin: 16px 0;

      p {
        font-size: var(--font-size-2);
      }
    }

    & > blockquote {
      margin-top: 0;
    }
  }
`

export const TLDR: FC = ({children}) => (
  <TLDRStyle>
    <summary role="button">
      TL;DR
    </summary>
    <div>
      {children}
    </div>
  </TLDRStyle>
)
