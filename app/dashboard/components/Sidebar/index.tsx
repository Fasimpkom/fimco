import { FC } from "react"
import { Transition } from "@headlessui/react"
import { useSidebarDashboard } from "app/core/contexts/SidebarDashboardContext"
import { SidebarLogo } from "./Logo"
import { Divider } from "../Divider"
import { Image, useMutation } from "blitz"
import { DashboardItems } from "./Items"
import logout from "app/auth/mutations/logout"

export const DashboardSidebar: FC = () => {
  const { show, onClose } = useSidebarDashboard()
  const [lg] = useMutation(logout)
  const onLogout = async () => await lg()
  return (
    <>
      <Transition
        as="div"
        show={show}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        className="bg-black opacity-50 fixed inset-0 z-50 overflow-y-auto"
        onClick={onClose}
      />
      <Transition
        as="aside"
        show={show}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        className="max-w-sm w-11/12 h-full py-6 px-3 smm:w-full fixed top-0 left-0 z-50 overflow-y-auto bg-white"
      >
        <div className="flex items-center">
          <button
            className="border-gray-300 border justify-center flex items-center rounded-[6px] p-3 mr-7"
            onClick={onClose}
          >
            <Image src="/icons/dashboard/arrow_back.svg" alt="back" width={18} height={18} />
          </button>
          <SidebarLogo />
        </div>
        <Divider className="my-7" />
        <DashboardItems />
        <button
          onClick={onLogout}
          className="flex items-center ml-3 mt-10 text-red-500 bg-white border border-red-500 rounded-md py-[10px] px-5"
        >
          <span className="mr-3 font-semibold text-sm">Logout</span>
        </button>
      </Transition>
    </>
  )
}
