import React from "react"

interface IProps {
  label?: string,
  name?: string,
  className?: string,
  value?: string,
  isError?: boolean,
  onChange?: (e: any) => void;
  children?: React.ReactNode[] | React.ReactNode
  [x:string]: any;
}

export function Select({ name, label, className, onChange, value, isError, children, ...others }: IProps) {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="block mb-2 ml-1 text-sm font-medium text-black">{label}</label>}

      <select
        name={name}
        className={`w-full rounded-md ${isError ? "border-red" : "border-grey"} border-[1px] p-4 pe-12 pr-4 py-3 text-sm shadow-sm text-black ${className}`}
        value={value}
        onChange={onChange}
        {...others}
      >
        {children}
      </select>
    </div>
  )
}