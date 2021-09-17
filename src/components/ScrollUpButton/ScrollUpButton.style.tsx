import styled from "styled-components"

const ScrollUpButtonWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background-color: var(--highlight-color);
  color: var(--bg-color);
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: var(--primary-color);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
    color: var(--black);
  }

  @media print {
    display: none;
  }
`

export default ScrollUpButtonWrapper
