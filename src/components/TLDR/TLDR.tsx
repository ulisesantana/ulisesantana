import React, {FC, MouseEventHandler, RefObject, useRef, useState} from "react";
import {TLDRStyle} from "./TLDR.style";
import {FiMaximize2, FiMinimize2} from "react-icons/fi";
import {useOnclickOutside} from "../../hooks";

export const TLDR: FC = ({children}) => {
  const [open, setOpen] = useState(false)
  const contentContainerRef: RefObject<HTMLDivElement> = useRef(null)
  useOnclickOutside(contentContainerRef, () => setOpen(false))
  const onClickHandler: MouseEventHandler<HTMLButtonElement> = () => {
    setOpen(!open)
  }
  const className = open ? 'open' : 'closed'
  return (
    <TLDRStyle ref={contentContainerRef}>
      <button className="summary" onClick={onClickHandler}>
        <span>
          TL;DR
        </span>
        <span className={`icon ${className}`}>
          <FiMinimize2 id="open-eye"/>
          <FiMaximize2 id="closed-eye"/>
        </span>
      </button>
      <div className={`content ${className}`}>
        {children}
      </div>
    </TLDRStyle>
  )
}
