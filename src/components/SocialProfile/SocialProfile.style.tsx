import styled from "styled-components"

export const SocialProfileWrapper = styled.ul`
  align-items: center;
  display: inline-flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 110px;
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media print {
    display: flex;
    flex-direction: column;
    margin: 0;
    max-width: 90vw;
    width: 100%;

    li {
      align-items: center;
      display: flex;
      margin: 8px;
      width: 90vw;
    }
  }
`

export const Tooltip = styled.div`
  position: absolute;
  background-color: #fff;
  pointer-events: none;
  padding: 0.4rem 0.8rem;
  border-radius: 3px;
  color: #333;
  font-size: 13px;
  bottom: 90%;
  left: 50%;
  opacity: 0;
  white-space: nowrap;
  visibility: hidden;
  z-index: 999;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transform: translate3d(-50%, 0, 0);
  transition: 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid #fff;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
  }
`

// @ts-ignore
export const SocialProfileItem = styled.li`
  list-style: none;
  position: relative;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    ${Tooltip} {
      opacity: 1;
      visibility: visible;
      bottom: calc(100% + 5px);
    }
  }

  a, a:visited {
    border: none;
    color: ${({theme}) => theme[theme.isDark ? "primary" : "textColor"]} !important;
    font-size: 22px;
    padding: 0.2rem;
    display: block;
    svg {
      display: block;
    }
  }
`
