import { SidebarDashboardProvider } from "app/core/contexts/SidebarDashboardContext"
import { DashboardLayout } from "app/core/layouts/DashboardLayout"
import { Performa } from "app/dashboard/components/Performa"
import { BlitzPage } from "blitz"

const Dashboard: BlitzPage = () => {
  return (
    <section className="font-sans">
      <h1 className="font-bold text-2xl">Performa Keseluruhan Toko</h1>
      <Performa />
    </section>
  )
}

Dashboard.getLayout = (page) => (
  <SidebarDashboardProvider>
    <DashboardLayout>{page}</DashboardLayout>
  </SidebarDashboardProvider>
)
Dashboard.suppressFirstRenderFlicker = true
export default Dashboard
