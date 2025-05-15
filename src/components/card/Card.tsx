import React from "react"

interface IProps {
  children: React.ReactNode,
  className?: string,
}

export function Card({ children, className,...others }: IProps) {
  return (
    <div className={`shadow-lg p-5 bg-white rounded-md ${className}`} {...others}>
      {children}
    </div>
  )
}