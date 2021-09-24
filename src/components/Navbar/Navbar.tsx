import React, {useEffect, useState} from "react"
// import { Link } from "gatsby"
import {IoIosClose} from "react-icons/io"
import {DrawerProvider} from "../Drawer/DrawerContext"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"
import SelectLanguage from "../SelectLanguage"
import SearchContainer from "../../containers/SearchContainer/SearchContainer"
import HeaderWrapper, {
  MenuWrapper,
  NavbarWrapper,
  NavSearchFromWrapper,
  NavSearchWrapper,
  SearchCloseButton,
} from "./Navbar.style"
import {Language} from "../../types"

type NavbarProps = {
  className?: string
  lang: Language
}

const MenuItems: any[] = [
  {
    label: "About",
    url: "/en",
  },
  {
    label: "Blog",
    url: "/blog",
  },
]

const MenuItemsSpanish = [
  {
    label: "Sobre mí",
    url: "/",
  },
  {
    label: "Blog",
    url: "/blog",
  },
]

export const Navbar: React.FC<NavbarProps> = ({ className, ...props }) => {
  const [state, setState] = useState({
    toggle: false,
    menu: MenuItems,
    search: "",
  })

  useEffect(() => {
    setState(oldValues => ({
      ...oldValues,
      menu: props.lang === "en" ? MenuItems : MenuItemsSpanish,
    }))
  }, [props.lang])

  const toggleHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    })
  }

  // Add all classs to an array
  const addAllClasses = ["header"]

  // className prop checking
  if (className) {
    addAllClasses.push(className)
  }

  return (
    <HeaderWrapper className={addAllClasses.join(" ")} {...props}>
      <NavbarWrapper className="navbar">
        <DrawerProvider>
          <MobileMenu items={state.menu} {...props} />
        </DrawerProvider>
        <MenuWrapper>
          <Menu items={state.menu} {...props}/>
        </MenuWrapper>
        <SelectLanguage lang={props.lang} />
        {/* <NavSearchButton
          type="button"
          aria-label="search"
          onClick={toggleHandle}
        >
          <IoIosSearch size="23px" />
        </NavSearchButton> */}
      </NavbarWrapper>

      <NavSearchWrapper className={state.toggle ? "expand" : ""}>
        <NavSearchFromWrapper>
          <SearchContainer />
          <SearchCloseButton
            type="submit"
            aria-label="close"
            onClick={toggleHandle}
          >
            <IoIosClose />
          </SearchCloseButton>
        </NavSearchFromWrapper>
      </NavSearchWrapper>
    </HeaderWrapper>
  )
}

export default Navbar
