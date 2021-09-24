import React, {ChangeEventHandler, FC, useEffect, useState} from "react";
import styled from "styled-components";
// @ts-ignore
import {window} from 'browser-monads'
import {FaRegLightbulb} from "react-icons/fa";

const DarkModeToggleStyle = styled.label`
  --size: 36px;
  cursor: pointer;
  color: var(--black);
  display: inline-block;
  height: calc(var(--size) + 10px);
  position: relative;
  width: var(--size);

  input {
    opacity: 0;
    width: 0;
    height: 0;

    & + .icon {
      &:before {
        background-color: #bbb;
        border-radius: 50%;
        content: '';
        position: absolute;
        height: 27px;
        width: 22px;
        left: 14px;
        transition: all ease-in-out 0.5s;
      }

      .light-bulb {
        height: var(--size);
        position: absolute;
        transition: all ease-in-out 0.5s;
        width: var(--size);
      }
    }

    &:checked + .icon {
      &:before {
        background-color: yellow;
        filter: drop-shadow(0 0 0.50rem yellow);
        transition: all ease-in-out 0.5s;
      }

      .light-bulb {
        filter: drop-shadow(0 0 0.25rem yellow);
        transition: all ease-in-out 0.5s;
      }
    }
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
      <span className="icon">
        <FaRegLightbulb className="light-bulb"/>
      </span>
    </DarkModeToggleStyle>
  )
}
