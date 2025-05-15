import React from "react"

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  src: string,
  styleProps?: React.CSSProperties,
  width?: number | string,
  height?: number | string,
  [x:string]: any;
}

export function Image({ className, src, styleProps, width, height, ...others }: IProps) {
  return (
    <img 
      className={`${className}`}
      src={src}
      style={{
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        height,
        width,
        ...styleProps
      }}
      {...others} 
    />
  )
}