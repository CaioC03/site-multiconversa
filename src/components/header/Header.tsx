import React from "react"

interface IProps {
  label: string
  labelAction?: React.ReactNode
  action?: React.ReactNode
}

export function Header({ label, action, labelAction }: IProps) {
  return (
    <div className="flex justify-between">
      {labelAction ? labelAction : (
        <h1 className="text-3xl font-medium text-black">{label}</h1>
      )}

      <div>
        {action}
      </div>
    </div>
  )
}