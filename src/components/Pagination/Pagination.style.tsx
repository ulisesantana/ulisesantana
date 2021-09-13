import styled from "styled-components"
import { themeGet } from "../../theme"

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PrevPage = styled.div`
  min-width: 32px;
  a {
    width: 32px;
    height: 32px;
    color: ${themeGet("textColor")};
    border-radius: 50%;
    background-color: ${themeGet("lightColor")};
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.15s ease-in-out;
    svg {
      display: block;
    }
    &:hover {
      color: ${props => themeGet(props.theme.isDark ? "black" : "textColor")};
      background-color: ${themeGet("primary")};
    }
    &:visited {
      color: ${themeGet("textColor")};
    }
  }
`

export const NextPage = styled.div`
  min-width: 32px;
  a {
    width: 32px;
    height: 32px;
    background-color: ${themeGet("lightColor")};
    color: ${themeGet("textColor")};
    border-radius: 50%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.15s ease-in-out;
    svg {
      display: block;
    }
    &:hover {
      color: ${props => themeGet(props.theme.isDark ? "black" : "textColor")};
      background-color: ${themeGet("primary")};
    }
    &:visited {
      color: ${themeGet("textColor")};
    }
  }
`

export const PageNumber = styled.div``
