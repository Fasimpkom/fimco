import { FC } from "react"
import { Tab } from "@headlessui/react"

type IntervalTabsProps = {
  oneDayClick: () => unknown
  oneWeekClick: () => unknown
  oneMonthClick: () => unknown
  oneYearClick: () => unknown
  className?: string
}

export const IntervalTabs: FC<IntervalTabsProps> = ({
  oneDayClick,
  oneWeekClick,
  oneMonthClick,
  oneYearClick,
  className,
}) => {
  const tabList = [
    {
      text: "1 Hari",
      onClick: oneDayClick,
    },
    {
      text: "1 Minggu",
      onClick: oneWeekClick,
    },
    {
      text: "1 Bulan",
      onClick: oneMonthClick,
    },
    {
      text: "1 Tahun",
      onClick: oneYearClick,
    },
  ]
  return (
    <div className={`w-full p-1 rounded-xl ${className}`}>
      <Tab.Group>
        <Tab.List className="flex rounded-xl bg-gray-100 p-1">
          {tabList.map((tab) => (
            <Tab
              key={tab.text}
              onClick={tab.onClick}
              className={({ selected }) => {
                let className =
                  "w-full rounded-lg px-2 py-3 font-bold outline-none border-none text-xs"
                if (selected) {
                  className += " bg-white text-blue-500"
                } else {
                  className += " text-gray-400"
                }
                return className
              }}
            >
              {tab.text}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
