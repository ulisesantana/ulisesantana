import styled from "styled-components"
import { themeGet } from "styled-system"

const ScrollUpButtonWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background-color: ${themeGet("colors.black", "#000000")};
  color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: ${themeGet("colors.primary", "yellow")};
    color: ${themeGet("colors.black", "#000000")};
  }
`

export default ScrollUpButtonWrapper
