import styled from "styled-components";

export const TLDRStyle = styled.div`
  color: var(--black);
  padding: 0;
  position: relative;
  
  @media print {
    display: none;
  }
  
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
    margin-bottom: 24px;
    padding: 8px;
    padding-right: 32px;
    text-align: center;
    
    span.icon {
      align-items: center;
      display: flex;
      height: 24px;
      padding-left: 8px;
      position: relative;
      
      #open-eye, #closed-eye {
        position: absolute;
        top: 1px;
        transition: all ease-in-out 0.5s;
      }
      
      &.open {
        #open-eye {
          opacity: 1;
        }
        #closed-eye {
          opacity: 0;
        }
      }
      
      &.closed {
        #open-eye {
          opacity: 0;
        }
        #closed-eye {
          opacity: 1;
        }
      }
    }
  }
  
  .summary ~ div {
    left: -50%;
    padding-left: 50%;
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
    padding: 48px;
    padding-left: 16px;
  }
  
  .content > :first-child {
    margin-top: 0;
  }

  .content > :last-child {
    margin-bottom: 0;
  }

  & > blockquote {
    margin-top: 0;
  }
  
  svg {
    color: var(--black);
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
