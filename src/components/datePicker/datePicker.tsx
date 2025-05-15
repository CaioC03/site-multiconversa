import 'react-datepicker/dist/react-datepicker.css'
import InputDatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

export interface IInputProps {
  label?: string,
  name?: string,
  className?: string,
  value: Date | null,
  isError?: boolean,
  setValue: (value: Date | null) => void
  [x:string]: any;
}

registerLocale('ptBR', ptBR)

export function DatePicker({ name, label, className, setValue, value, isError, ...others }: IInputProps) {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="block mb-2 ml-1 text-sm font-medium text-black">{label}</label>}
      <InputDatePicker 
        dateFormat="dd/MM/yyyy"
        locale={'ptBR'}
        selected={value} 
        onChange={(date) => setValue(date)} 
        name={name}
        className={`w-full rounded-md ${isError ? "border-red" : "border-grey"} border-[1px] p-4 pe-12 pr-4 py-3 text-sm shadow-sm text-black ${className}`}
        {...others}
      />
    </div>
  )
}