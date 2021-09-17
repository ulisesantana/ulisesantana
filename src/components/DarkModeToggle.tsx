import React, {ChangeEventHandler, FC, useEffect, useState} from "react";
import styled from "styled-components";
// @ts-ignore
import {window} from 'browser-monads'

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
    background-color: #3ab9fe;
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

const themeKey = 'theme'
enum ThemeMode {
  Dark = 'dark',
  Light = 'light'
}

const isDarkModeEnabled = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const setDarkModeCachedValue = (value: boolean) => window.localStorage.setItem(themeKey, value ? ThemeMode.Dark : ThemeMode.Light)
const getDarkModeCachedValue = () => {
  const state = window.localStorage.getItem(themeKey)
  if (state !== null) {
    return state === ThemeMode.Dark
  }
  return state
}

export const DarkModeToggle: FC = () => {
  const [isDark, setIsDark] = useState(getDarkModeCachedValue() ?? isDarkModeEnabled())

  useEffect(() => {
    setDarkModeCachedValue(isDark)
    if (isDark) {
      document.body.classList.add('theme-dark')
      document.body.classList.remove('theme-light')
    } else {
      document.body.classList.add('theme-light')
      document.body.classList.remove('theme-dark')
    }
  }, [isDark])

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = e => setIsDark(e.target.checked)

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
