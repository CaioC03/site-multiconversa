import { useState } from "react"
import { Link } from "react-router-dom";
import { CarbonViewIcon } from "../../assets/CarbonViewIcon";
import { CarbonViewOffIcon } from "../../assets/CarbonViewOffIcon";

interface IProps {
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  setValue?: (value: string) => void;
  inputProps?: any;
  isError?: boolean,
  forgotPassword?: boolean,
  leftIcon?: React.ReactNode
}

export function PasswordInput({ label, name, placeholder, value, setValue, inputProps, isError, forgotPassword = false, leftIcon, ...others }: IProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div {...others}>
      <div className="flex justify-between">
        {label && <label className="block mb-2 ml-1 text-sm font-medium text-black">{label}</label>}
        {forgotPassword && <Link to="/recuperar" className="block mb-2 mr-1 text-sm text-black/50">Esqueceu sua senha</Link>}
      </div>

      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute ml-3">
            {leftIcon}
          </div>
        )}

        <input
          name={name}
          type={showPassword ? "text" : "password"}
          className={`w-full rounded-md ${isError ? "border-red" : "border-grey"} border-[1px] p-4 pe-12 py-3 text-sm shadow-sm text-black ${leftIcon ? "pl-10" : "pl-4"}`}
          value={value}
          onChange={setValue ? (event) => {setValue(event.target.value)} : undefined}
          placeholder={placeholder}
          {...inputProps}
        />

        <span 
          className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer text-black"
          onClick={() => setShowPassword(value => !value)}
        >
          {showPassword ? (
            <CarbonViewIcon />
          ) : (
            <CarbonViewOffIcon />
          )}
        </span>
      </div>
    </div>
  )
}