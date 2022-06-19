import { SidebarDashboardProvider } from "app/core/contexts/SidebarDashboardContext"
import { DashboardLayout } from "app/core/layouts/DashboardLayout"
import { Wallets } from "app/dashboard/components/Wallets"
import { BlitzPage } from "blitz"

const Konfigurasi: BlitzPage = () => {
  return (
    <section className="font-sans flex flex-col space-y-5 pb-8">
      <h1 className="font-bold text-2xl">Konfigurasi Toko</h1>
      <Wallets />
    </section>
  )
}

Konfigurasi.getLayout = (page) => (
  <SidebarDashboardProvider>
    <DashboardLayout>{page}</DashboardLayout>
  </SidebarDashboardProvider>
)
Konfigurasi.suppressFirstRenderFlicker = true
export default Konfigurasi
