import React from "react";
import LocalDropzone from "react-dropzone";

interface IProps {
  value: string;
  onChange: (up: any) => void;
  renderValue?: React.ReactElement;
  isError?: boolean;
  typesLabel?: string;
  size: number;
  [x:string]: any;
}

export function UploadAvatar({ onChange, renderValue, isError, typesLabel, ...others }: IProps) {
  return (
    <LocalDropzone onDrop={onChange} {...others}>
      {({getRootProps}: any) => (
        <div className={`mx-auto ${isError ? "text-red" : "text-black/50"}`}>
          <div className={`flex items-center justify-center w-72 h-72`} {...getRootProps()}>
            <label className={`rounded-full flex flex-col items-center justify-center border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50 h-full w-full`}>
              {renderValue ? (
                <div className="flex flex-col items-center justify-center">
                  {renderValue}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Clique para carregar</span> ou arraste e solte</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{typesLabel}</p>
                </div>
              )}
            </label>
          </div> 
        </div>
      )}
    </LocalDropzone>
  )
}