import { useEffect, useState } from "react";
import { Menu } from "../menu";
import { Input } from "../input";
import { VariableIcon } from "../../assets/VariableIcon";
import { useVariable } from "../../hooks/useVariables";

export const CustomToolbar = ({ name, onSelectVariable, options }: { name: string, options: string[], onSelectVariable: (name: string) => void }) => {
  const [searchValue, setSearchValue] = useState<string>("")
  const [anchorElMenu, setAnchorElMenu] = useState<any>(null)
  const { variables, getAllVariables } = useVariable()
  const showHeaderMenu = !!anchorElMenu

  useEffect(() => {
    getAllVariables()
  }, [getAllVariables])

  return (
    <div id={name}>
      {options.indexOf("BOLD") !== -1 && <button className="ql-bold" />}
      {options.indexOf("ITALIC") !== -1 && <button className="ql-italic" />}
      {options.indexOf("STRIKE") !== -1 && <button className="ql-strike" />}
      {options.indexOf("VARIABLE") !== -1 && (
        <button className="ql-selectVariable text-black">
          <div onClick={(e) => setAnchorElMenu(!showHeaderMenu ? e.currentTarget : null)}>
            <VariableIcon size={20} />
          </div>
          <Menu
            showMenu={showHeaderMenu}
            closeMenu={() => setAnchorElMenu(null)}
            anchorEl={anchorElMenu}
            position="fixed"
            className="w-72 h-80 overflow-y-auto overflow-x-hidden"
            childrenHeight={320}
          >
            <ul className="py-2 text-sm text-black cursor-default">
              <li>
                <div className="px-4 py-2 flex flex-col">
                  <Input 
                    className="h-10"
                    placeholder="Pesquisar..."
                    setValue={setSearchValue}
                    value={searchValue}
                  />
                </div>
              </li>
              <hr className="text-grey mb-3" />
              
              {variables?.filter((variable: any) => variable.name.toUpperCase().startsWith(searchValue.toUpperCase()) && variable.variableGroup === "default").length > 0 && <p className="w-full text-start pl-4 font-bold">Campos</p>}
              {variables?.filter((variable: any) => variable.name.toUpperCase().startsWith(searchValue.toUpperCase()) && variable.variableGroup === "default").map((variable: any) => (
                <>
                  <li 
                    className="hover:bg-grey text-black cursor-pointer" 
                    onClick={() => {
                      setAnchorElMenu(null)
                      onSelectVariable(variable.name)
                    }}
                  >
                    <p className="px-4 py-2 flex gap-3 items-center transition ease-in-out">
                      <div className="flex align-middle">{variable.name}</div>
                    </p>
                  </li>
                </>
              ))}

              {variables?.filter((variable: any) => variable.name.toUpperCase().startsWith(searchValue.toUpperCase()) && variable.variableGroup === "common").length > 0 && <p className="w-full text-start pl-4 mt-3 font-bold">Padrão</p>}
              {variables?.filter((variable: any) => variable.name.toUpperCase().startsWith(searchValue.toUpperCase()) && variable.variableGroup === "common").map((variable: any) => (
                <>
                  <li 
                    className="hover:bg-grey text-black cursor-pointer" 
                    onClick={() => {
                      setAnchorElMenu(null)
                      onSelectVariable(variable.name)
                    }}
                  >
                    <p className="px-4 py-2 flex gap-3 items-center transition ease-in-out">
                      <div className="flex align-middle">{variable.name}</div>
                    </p>
                  </li>
                </>
              ))}
            </ul>
          </Menu>
        </button>
      )}
    </div>
  )
};