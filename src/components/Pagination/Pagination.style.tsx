import styled from "styled-components"

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavToPage = styled.div`
  min-width: 32px;
  a, a:visited {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--highlight-color);
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.15s ease-in-out;
    svg {
      color: var(--bg-color);
      display: block;
    }
    &:hover {
      background-color: var(--primary-color);
      svg {
        color: var(--black);
      }
    }
  }
`

export const PageNumber = styled.div``
