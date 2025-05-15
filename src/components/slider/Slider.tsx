interface IProps {
  name?: string,
  className?: string,
  min: string,
  max: string,
  value?: string,
  step?: string,
  isError?: boolean,
  setValue?: (value: any) => void
  [x:string]: any;
}

export function Slider({ name, min, max, step, className, setValue, value, ...others }: IProps) {
  return (
    <div className="flex flex-col w-full">
      <input 
        name={name}
        type="range" 
        className={`w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-moz-range-thumb]:-mt-[4px] [&::-moz-range-thumb]:-mb-[4px] [&::-webkit-slider-thumb]:-mb-[4px] [&::-webkit-slider-thumb]:-mt-[4px] ${className}`}
        min={min} 
        max={max}
        value={value}
        onChange={setValue || undefined}
        step={step}
        {...others}
      />
    </div>
  )
}