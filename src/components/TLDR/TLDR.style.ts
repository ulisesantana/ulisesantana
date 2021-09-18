import styled from "styled-components";

export const TLDRStyle = styled.div`
  color: var(--black);
  padding: 0;
  position: relative;
  
  .summary {
    align-items: center;
    display: flex;
    background-color: var(--primary-color);
    border: none;
    color: var(--black);
    cursor: pointer;
    font-size: var(--font-size-3);
    font-weight: bold;
    justify-content: space-between;
    padding: 8px;
    text-align: center;
    
    span {
      height: 24px;
    }
    
    .open, .closed {
      align-items: center;
      display: flex;
      transition: all ease-in-out 0.5s;
    }
    
    .open {
      transform: rotate(90deg);
    }
  }
  
  .summary ~ div {
    position: absolute;
    transition: all ease-in-out 0.5s;
  }

  .summary ~ .open {
    opacity: 1;
  }
  
  .summary ~ .closed {
    opacity: 0;
    transform: scaleX(0);
    transform-origin: -100% 0;
  }

  & > :not(.summary) {
    background-color: var(--primary-color);
    height: max(24px, auto);
    padding: 16px;
  }

  & > blockquote {
    margin-top: 0;
  }


  @media (max-width: 575px) {
    .summary {
      font-size: var(--font-size-2);
      font-weight: bold;
      width: 5rem;
    }

    blockquote, blockquote {
      font-size: var(--font-size-1);
      margin: 16px 0;

      p {
        font-size: var(--font-size-2);
      }
    }

    blockquote {
      margin-top: 0;
    }
  }
`
