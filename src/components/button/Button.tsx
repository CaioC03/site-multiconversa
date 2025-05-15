import React from "react"

interface IProps {
  label?: string,
  variant?: "contained" | "outlined",
  className?: string,
  onClick?: () => void,
  children?: React.ReactNode,
  href?: string,
  as?: any,
  [x:string]: any;
}

export function Button({ label, as, variant = "contained", onClick, href = "#", children, className, ...others }: IProps) {
  const Tag = (as || "a") as keyof JSX.IntrinsicElements
  
  return (
    <Tag
      className={`rounded-md ${variant === "outlined" ? "text-primary border border-primary hover:bg-primary/10" : "bg-primary text-white hover:bg-primary/75"} px-5 py-2.5 text-sm font-medium shadow ${className}`}
      href={href}
      onClick={onClick}
      {...others}
    >
      {label || children}
    </Tag>
  )
}