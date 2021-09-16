import React, {ChangeEventHandler, FC} from "react";
import styled from "styled-components";

const DarkModeToggleStyle = styled.label`
  /* The switch - the box around the slider */
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  /* Hide default HTML checkbox */

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */

  .slider {
    background-color: #ffef88;
    cursor: pointer;
    border-radius: 34px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: .4s;
    transition: .4s;

    .icon {
      padding: 0 4px;
    }
  }

  .slider:before {
    background-color: #dcf4f6;
    border-radius: 50%;
    position: absolute;
    font-size: 8px;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input + .slider {
    background-color: ${props => props.theme.secondary};
    align-items: center;
    display: flex;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
  }

  input:checked + .slider {
    background-color: #0c297f;
    justify-content: flex-start;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }


`

interface DarkModeToggleProps {
  isDark: boolean
  themeHandler: (isChecked: boolean) => void
}

export const DarkModeToggle: FC<DarkModeToggleProps> = ({isDark, themeHandler}) => {
  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = e => themeHandler(e.target.checked)
  return (
    <DarkModeToggleStyle>
      <input
        type="checkbox"
        onChange={onChangeHandler}
        checked={isDark}
      />
      <span className="slider">
        <span className="icon">
          { isDark ? '🌛' : '🌞'}
        </span>
      </span>
    </DarkModeToggleStyle>
  )
}
