import { Menu } from "@headlessui/react"
import { ReactNode, FC } from "react"

type DropdownItemProps = {
  children?: ReactNode
}

const DropdownItem: FC<DropdownItemProps> = ({ children }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-2 text-sm"
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  )
}

export default DropdownItem
