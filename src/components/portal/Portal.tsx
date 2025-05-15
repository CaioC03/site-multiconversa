import { ReactNode, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

interface IProps {
  children: ReactNode
}

export function Portal({ children }: IProps) {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal")
    setMounted(true)
  }, [])

  return (mounted && ref.current) ? createPortal(<div className="block fixed left-0 top-0 w-full h-full overflow-auto z-20">{children}</div>, ref.current) : null
}