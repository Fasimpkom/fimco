import { Profile } from "app/core/components/Profile"
import { useSidebarDashboard } from "app/core/contexts/SidebarDashboardContext"
import { Image } from "blitz"
import { FC, Suspense } from "react"
type DashboardNavbarProps = {
  className?: string
}
export const DashboardNavbar: FC<DashboardNavbarProps> = ({ className }) => {
  const { onOpen } = useSidebarDashboard()
  return (
    <nav
      className={`flex justify-between fixed top-0 left-0 z-40 w-screen items-center h-[72px] bg-white p-4 shadow-sm ${className}`}
    >
      <div className="flex items-center">
        <div className="w-8 h-8 relative" onClick={onOpen}>
          <Image src="/icons/dashboard/menu.svg" layout="fill" objectFit="contain" alt="menu" />
        </div>
        <div className="w-7 h-7 relative ml-5">
          <Image src="/icons/dashboard/fimco-sm.svg" layout="fill" objectFit="contain" alt="menu" />
        </div>
      </div>
      <Suspense fallback="...">
        <Profile />
      </Suspense>
    </nav>
  )
}
