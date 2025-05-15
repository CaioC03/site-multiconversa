import { WarningIcon } from "../../assets/WarningIcon"

interface IProps {
  type: "warning",
  message: string,
  className?: string,
}

export function Alert({ className, message, type, ...others }: IProps) {
  if (type === "warning") {
    return (
      <div className={`${className} px-4 items-center border-yellow text-yellow border rounded-md w-full flex gap-3`} {...others}>
        <WarningIcon size={70} />
  
        <div className="flex w-full text-sm">
          {message}
        </div>
      </div>
    )
  }
}