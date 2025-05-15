import Select from 'react-select';
import { getStyleConfig } from '../../utils/styleConfig';

interface IProps {
  label?: string,
  name?: string,
  className?: string,
  value?: object,
  isError?: boolean,
  onChange?: (e: any) => void;
  options: object[];
  [x:string]: any;
}

export function AutoComplete({ name, label, className, options, onChange, value, isError, ...others }: IProps) {
  const config: any = getStyleConfig();
  
  return (
    <div className="flex flex-col w-full">
      {label && <label className="block mb-2 ml-1 text-sm font-medium text-black">{label}</label>}

      <Select
        name={name}
        options={options}
        className={`text-black ${className}`}
        value={value}
        onChange={onChange}
        styles={{
          control: (styles) => ({ ...styles, 
            width: "100%",
            borderColor: (isError ? config.theme.colors.red : config.theme.colors.grey) || "black",
            padding: 4,
            paddingRight: 4,
          }),
        }}
        menuPosition='fixed'
        {...others}
      />
    </div>
  )
}