import React, { FC } from "react"
import styled from "styled-components"
import { themeGet } from "../theme"

const PillCloudWrapper = styled.ul`
  align-items: center;
  color: ${themeGet("black")};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  line-height: 3rem;
  list-style: none;

  li {
    align-items: center;
    background: ${themeGet("primary")};
    color: inherit;
    display: flex;
    justify-content: center;
    max-height: fit-content;
    min-width: 60px;
    margin: 4px;
    padding: 8px 16px;
    width: fit-content;
    span {
      display: inline-block;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1rem;
    }
  }

  @media print {
    list-style: circle;
    li {
      background: none;
      filter: none;
      padding: 8px;
    }

    span {
      font-size: 1.25rem;
      line-height: 1.25rem;
    }
  }
`

export const PillCloud: FC<{ items: string[] }> = ({ items }) => (
  <PillCloudWrapper>
    {!!items.length &&
      items.map((item: string) => (
        <li>
          <span>{item}</span>
        </li>
      ))}
  </PillCloudWrapper>
)
