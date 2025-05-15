import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  name?: string,
  type?: "text" | "number" | "email" | "time" | "date" | "datetime-local",
  className?: string,
  value?: string,
  isError?: boolean,
  setValue?: (value: string) => void
  leftIcon?: React.ReactNode
  [x:string]: any;
}

export function Input({ name, label, className, type, setValue, value, isError, leftIcon, ...others }: IInputProps) {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="block mb-2 ml-1 text-sm font-medium text-black">{label}</label>}
      
      <div className="flex items-center">
        {leftIcon && (
          <div className="absolute ml-3">
            {leftIcon}
          </div>
        )}
        <input
          name={name}
          type={type}
          className={`w-full rounded-md ${isError ? "border-red" : "border-grey"} border-[1px] p-4 pe-12 pr-4 py-3 text-sm shadow-sm text-black ${leftIcon ? "pl-10" : "pl-4"} ${className}`}
          value={value}
          onChange={setValue ? (event) => {setValue(event.target.value)} : undefined}
          {...others}
        />
      </div>
    </div>
  )
}