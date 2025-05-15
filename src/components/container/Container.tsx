import React from "react"

interface IProps {
  children: React.ReactNode
}

export function Container({ children, ...others }: IProps) {
  return (
    <div className="flex" {...others}>
      {children}
    </div>
  )
}