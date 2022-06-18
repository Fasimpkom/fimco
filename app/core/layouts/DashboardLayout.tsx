import { DashboardNavbar } from "app/dashboard/components/Navbar"
import { DashboardSidebar } from "app/dashboard/components/Sidebar"
import { BlitzLayout } from "blitz"
import { ReactNode } from "react"

type DashboardLayoutProps = {
  children: ReactNode
}
export const DashboardLayout: BlitzLayout<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <DashboardNavbar className="lg:hidden" />
      <main className="bg-gray-50 min-h-screen">
        <DashboardSidebar />
        <main className="px-3 pt-[105px] z-0">{children}</main>
      </main>
    </div>
  )
}
