import {RefObject, useEffect} from "react";

export function useOnclickOutside(ref: RefObject<HTMLElement>, callback: () => void) {
  const outsideClickHandler = (event: MouseEvent) => {
    const node = event.target as Node
    const element = ref.current
    if (node && element && !element.contains(node)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener("click", outsideClickHandler)
    return () => {
      document.removeEventListener("click", outsideClickHandler)
    }
  }, [])
}
