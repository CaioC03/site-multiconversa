import React, { useEffect, useState } from "react"
import { Portal } from "../portal"

interface IProps {
  showMenu: boolean
  anchorEl: any
  children: React.ReactNode
  closeMenu: () => void
  position?: "absolute" | "fixed"
  className?: string
  childrenWidth?: number
  childrenHeight?: number
  [x:string]: any;
}

export function Menu({ showMenu, anchorEl, closeMenu, position = "absolute", children, className, childrenWidth=0, childrenHeight=0, ...others }: IProps) {
  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)

  useEffect(() => {
    if (!anchorEl) {
      return
    }

    const p = anchorEl.getBoundingClientRect()

    if (position === "absolute") {
      setPositionX(
        p.left + 179 > window.innerWidth ?
        p.left - childrenWidth + 40 :
        p.left
      )

      setPositionY(
        p.top + childrenHeight + 9 > window.innerHeight ?
        p.top - childrenHeight :
        p.top + anchorEl.offsetHeight + 8
      )
    } else if (position === "fixed") {
      const element = anchorEl.getBoundingClientRect()
      setPositionX(element.left)
      setPositionY(element.top + 20)
    }
  }, [anchorEl, childrenHeight, childrenWidth, position])

  if (!anchorEl) {
    return
  }

  return (
    <>
      <Portal>
        <div
          id="dropdownDelay" 
          className={`z-50 ${showMenu ? "block" : "hidden"} ${position} text-black bg-white divide-gray-100 rounded-lg shadow-xl border border-grey ${className}`}
          style={{
            left: positionX,
            top: positionY,
            display: positionX === 0 && positionY === 0 ? "none" : "block"
          }}
          {...others}
        >
          {children}
        </div>
        <div className={`fixed inset-0 z-40`} onClick={closeMenu} />
      </Portal>
    </>
  )
}