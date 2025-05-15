import React, { useEffect, useRef } from "react"
import { Portal } from "../portal"

interface IProps {
  children: React.ReactNode,
  showModal: boolean
}

export function Modal({ showModal, children }: IProps) {
  const ref = useRef<Element | null>(null)

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal")
  }, [])

  return showModal && (
    <Portal>
      <div
        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
        onKeyDownCapture={(e) => {
          if (e.code === "Enter" && !(e.target as any)?.classList.contains("ql-editor")) {
            e.preventDefault()
          }
        }}
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none max-h-[90vh] overflow-y-auto overflow-x-hidden`}>
            {children}
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 z-40 bg-black/25 backdrop-blur-sm`} />
    </Portal>
  )
}