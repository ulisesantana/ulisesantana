import React from "react"
import {Link} from "gatsby"
import {MenuItem, MenuItemWrapper} from "./Navbar.style"
import {DarkModeToggle} from "../";

type MenuProps = {
  items: MenuItemsProps[]
  className?: string
  isDark: boolean
  themeHandler: (isChecked: boolean) => void
}

type MenuItemsProps = {
  url: string
  label: string
  external?: boolean
}

const Menu: React.FunctionComponent<MenuProps> = ({
  items,
  isDark,
  themeHandler,
  className,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ["menu"]
  // className prop checking
  if (className) {
    addAllClasses.push(className)
  }
  return (
    <MenuItemWrapper className={addAllClasses.join(" ")} {...props}>
      {items.map((item, index) => (
        <MenuItem key={index}>
          {item.external ? (
            <a href={item.url}>{item.label}</a>
          ) : (
            <Link to={item.url} activeClassName="active-link">
              {item.label}
            </Link>
          )}
        </MenuItem>
      ))}
      <MenuItem key="theme-toggle">
        <DarkModeToggle
          isDark={isDark}
          themeHandler={themeHandler}
        />
      </MenuItem>
    </MenuItemWrapper>
  )
}

export default React.memo(Menu)
