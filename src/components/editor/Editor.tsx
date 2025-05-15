import { useMemo, useRef } from "react"
import ReactQuill from "react-quill";
import { CustomToolbar } from "./CustomToolbar";
import 'react-quill/dist/quill.snow.css';
import { v4 } from "uuid";

interface IProps {
  label?: string,
  name?: string,
  editorName?: string,
  className?: string,
  value?: string,
  isError?: boolean,
  onChange?: (name: string, value: string) => void
  options?: string[]
  [x:string]: any;
}

export function Editor({ name = v4(), label, editorName, className, onChange, value, isError, options = ["BOLD", "ITALIC", "STRIKE", "VARIABLE"], ...others }: IProps) {
  const editorRef: any = useRef()

  function selectVariable(name: string) {
    const quill = editorRef.current.getEditor()

    const cursorPosition = quill.getSelection()?.index || quill.getText().length;

    quill.insertText(cursorPosition, `{{${name}}}`);
    quill.setSelection(cursorPosition + `{{${name}}}`.length);
  }

  const getModules = useMemo(() => ({
    toolbar: {
      container: `#${editorName || name}`,
    }
  }), [name, editorName]);

  return (
    <div className="flex flex-col w-full notranslate">
      {label && <label className="block mb-2 ml-1 text-sm font-medium text-black">{label}</label>}
      <ReactQuill
        ref={editorRef}
        onChange={onChange ? (value) => {onChange(name, value)} : undefined}
        value={value}
        className={`w-full rounded-md ${isError ? "border-red" : "border-grey"} text-sm text-black ${className} border-b-0`}
        modules={getModules}
        {...others}
      />
      <CustomToolbar name={editorName || name} onSelectVariable={selectVariable} options={options} />
    </div>
  )
}