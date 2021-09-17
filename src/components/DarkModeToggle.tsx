import React, {ChangeEventHandler, FC, useEffect, useState} from "react";
import styled from "styled-components";
// @ts-ignore
import {window} from 'browser-monads'
import {MdWbSunny, IoMdMoon} from "react-icons/all";

const DarkModeToggleStyle = styled.label`
  --size: 36px;
  cursor: pointer;
  display: inline-block;
  height: calc(var(--size) + 10px);
  position: relative;
  width: var(--size);

  input {
    opacity: 0;
    width: 0;
    height: 0;

    & + .icon {
      .moon {
        height: 0;
        width: 0;
      }

      .sun {
        height: var(--size);
        width: var(--size);
      }
    }

    &:checked + .icon {
      .moon {
        height: var(--size);
        width: var(--size);
      }

      .sun {
        height: 0;
        width: 0;
      }
    }
  }

  .moon, .sun {
    font-size: var(--size);
    position: absolute;
    transition: all ease-in-out 0.3s;
  }

  .sun {
    color: #f3872f;
    left: 0;
    top: 4px;
  }

  .moon {
    bottom: 8px;
    color: var(--primary-color);
    right: 0;
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
        <IoMdMoon className="moon"/>
        <MdWbSunny className="sun"/>
      </span>
    </DarkModeToggleStyle>
  )
}
