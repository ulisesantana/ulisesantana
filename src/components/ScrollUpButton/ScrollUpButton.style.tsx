import styled from "styled-components"
import { themeGet } from "../../theme"

const ScrollUpButtonWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background-color: ${props => themeGet(props.theme.isDark ? "white" : "black")};
  color: ${props => themeGet(props.theme.isDark ? "black" : "white")};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: ${themeGet("primary")};
    color: ${themeGet("black")};
  }

  @media print {
    display: none;
  }
`

export default ScrollUpButtonWrapper
