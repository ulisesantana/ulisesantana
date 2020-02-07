import React, { FC } from "react"
import styled from "styled-components"
import { themeGet } from "styled-system"

const PillCloudWrapper = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  line-height: 3rem;
  list-style: none;

  li {
    align-items: center;
    background: linear-gradient(#ffa, ${themeGet("colors.primary", "yellow")});
    border-radius: 20px;
    display: flex;
    justify-content: center;
    filter: drop-shadow(0.2rem 0.2rem 0.2rem lightgrey);
    max-height: fit-content;
    min-width: 60px;
    margin: 4px;
    padding: 8px 16px;
    width: fit-content;
    span {
      display: inline-block;
      font-size: 1rem;
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
