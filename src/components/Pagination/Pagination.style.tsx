import styled from "styled-components"
import { themeGet } from "../../theme"

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavToPage = styled.div`
  min-width: 32px;
  a, &:visited {
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
  }
`

export const PageNumber = styled.div``
