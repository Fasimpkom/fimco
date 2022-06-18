import { SIDEBAR_ITEMS } from "app/dashboard/constants"
import { Image, Link } from "blitz"
import { FC } from "react"
import { Disclosure } from "@headlessui/react"

export const DashboardItems: FC = () => {
  return (
    <div className="flex flex-col my-2">
      {SIDEBAR_ITEMS.map(({ isDisclosure, path, icon, name, disclosureItems }) => {
        if (!isDisclosure) {
          return (
            <Link href={path ?? ""} key={name}>
              <a className="flex items-center py-2 px-3 rounded bg-white hover:bg-gray-200">
                <i className="w-6 h-6 relative">
                  <Image src={icon} layout="fill" alt="icon" objectFit="contain" />
                </i>
                <span className="ml-4 font-bold text-gray-500 text-sm">{name}</span>
              </a>
            </Link>
          )
        }
        return (
          <Disclosure key={name}>
            {({ open }) => (
              <div className="w-full">
                <Disclosure.Button className="flex justify-between items-center py-2 px-3 rounded bg-white hover:bg-gray-200 w-full">
                  <div className="flex items-center">
                    <i className="w-6 h-6 relative">
                      <Image src={icon} layout="fill" alt="icon" />
                    </i>
                    <span className="ml-4 font-bold text-gray-500 text-sm">{name}</span>
                  </div>
                  <i
                    className={`w-6 h-6 relative transform transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  >
                    <Image
                      src="/icons/dashboard/keyboard_arrow_down.svg"
                      layout="fill"
                      alt="icon"
                    />
                  </i>
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-col items-end my-2">
                  {disclosureItems?.map((it) => (
                    <Link href={path ?? ""} key={it.name}>
                      <a className="flex items-center py-2 px-3 w-[95%] rounded bg-white hover:bg-gray-200">
                        <i className="w-6 h-6 relative">
                          <Image src={it.icon} layout="fill" alt="icon" />
                        </i>
                        <span className="ml-4 font-bold text-gray-500 text-sm">{it.name}</span>
                      </a>
                    </Link>
                  ))}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        )
      })}
    </div>
  )
}
