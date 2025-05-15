interface IProps {
  tabs: {
    label: string;
    value: string;
  }[]
  selectedTab: string
  onSelectTab: (tab: string) => void
  [x:string]: any;
}

export function Tabs({ tabs, selectedTab, onSelectTab, ...others }: IProps) {
  return (
    <div {...others}>
      <div className="text-sm font-medium text-center text-grey border-b dark:text-gray-400 dark:border-gray-700 select-none">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab, key) => (
            <li className="mr-2 cursor-pointer" key={key} onClick={() => onSelectTab(tab.value)}>
              <div className={`inline-block p-4 ${selectedTab === tab.value ? "text-primary" : "text-black/30"}  border-b-2 border-transparent rounded-t-lg hover:text-black/60`}>{tab.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}