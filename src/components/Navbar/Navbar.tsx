import React, { useState, useEffect } from "react"
// import { Link } from "gatsby"
import { IoIosSearch, IoIosClose } from "react-icons/io"
import { DrawerProvider } from "../Drawer/DrawerContext"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"
import SelectLanguage from "../SelectLanguage"
import SearchContainer from "../../containers/SearchContainer/SearchContainer"
import HeaderWrapper, {
  NavbarWrapper,
  MenuWrapper,
  NavSearchButton,
  NavSearchWrapper,
  SearchCloseButton,
  NavSearchFromWrapper,
} from "./Navbar.style"
import { Language } from "../../types"

type NavbarProps = {
  className?: string
  lang: Language
}

const MenuItems = [
  // {
  //   label: "About",
  //   url: "/en",
  // }
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
          <MobileMenu items={state.menu} />
        </DrawerProvider>
        <MenuWrapper>
          <Menu items={state.menu} />
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

      <NavSearchWrapper className={state.toggle === true ? "expand" : ""}>
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
