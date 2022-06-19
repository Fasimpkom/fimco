import { Menu } from "@headlessui/react"
import DropdownItem from "./DropdownItem"
import { Transition } from "@headlessui/react"
import { Fragment, useState, FC } from "react"

type DropdownProps = {
  setData: Function
  items: Array<any>
}

const Dropdown: FC<DropdownProps> = ({ setData, items }) => {
  const [selectedSource, setSelectedSource] = useState("Semua Sumber")
  const [selecteableSource, setSelectableSource] = useState(["OVO", "Tokopedia", "Lainnya"])

  const filterSource = (newSelectedSource: string) => {
    setSelectableSource((oldSource) => {
      const newSelectableSource = oldSource.filter((data) => data !== newSelectedSource)
      newSelectableSource.push(selectedSource)
      return newSelectableSource
    })
    setSelectedSource(newSelectedSource)

    setData(
      items.filter((data) => {
        if (newSelectedSource === "Semua Sumber") {
          return true
        }
        return data?.sumber === newSelectedSource
      })
    )
  }

  return (
    <Menu as="div" className="flex justify-center w-full  text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border mt-5 border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {selectedSource}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute top-[8em] mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1">
            <DropdownItem>{selectedSource}</DropdownItem>
          </div>
          <div className="py-1">
            {selecteableSource.map((source, index) => (
              <DropdownItem onClick={() => filterSource(source)} key={index}>
                {source}
              </DropdownItem>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown
