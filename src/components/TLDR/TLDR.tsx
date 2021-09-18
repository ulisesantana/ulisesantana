import React, {FC, MouseEventHandler, RefObject, useRef, useState} from "react";
import {TLDRStyle} from "./TLDR.style";
import {FaCaretRight} from "react-icons/all";
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
        <span className={className}>
          <FaCaretRight/>
        </span>
        <span>
          TL;DR
        </span>
      </button>
      <div className={className}>
        {children}
      </div>
    </TLDRStyle>
  )
}
