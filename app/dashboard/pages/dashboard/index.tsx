import { SidebarDashboardProvider } from "app/core/contexts/SidebarDashboardContext"
import { DashboardLayout } from "app/core/layouts/DashboardLayout"
import { Keuntungan } from "app/dashboard/components/Chart/Keuntungan"
import { Pendapatan } from "app/dashboard/components/Chart/Pendapatan"
import { PendapatanSetiapSumber } from "app/dashboard/components/Chart/PendapatanSetiapSumber"
import { Pengeluaran } from "app/dashboard/components/Chart/Pengeluaran"
import { Performa } from "app/dashboard/components/Performa"
import { BlitzPage } from "blitz"
import { Suspense } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const Dashboard: BlitzPage = () => {
  return (
    <section className="font-sans flex flex-col space-y-5 pb-8">
      <h1 className="font-bold text-2xl">Performa Keseluruhan Toko</h1>
      <Suspense fallback="Loading...">
        <Performa />
      </Suspense>
      <Keuntungan />
      <Pendapatan />
      <PendapatanSetiapSumber />
      <Pengeluaran />
      <PendapatanSetiapSumber type="pengeluaran" />
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
