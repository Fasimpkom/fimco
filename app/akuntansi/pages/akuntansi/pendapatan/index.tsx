import { SidebarDashboardProvider } from "app/core/contexts/SidebarDashboardContext"
import { DashboardLayout } from "app/core/layouts/DashboardLayout"
import { Performa } from "app/dashboard/components/Performa"
import { BlitzPage } from "blitz"
import { Menu, Transition } from "@headlessui/react"
import { useState } from "react"
import DropdownItem from "./component/dropdown/DropdownItem"
import RiwayatTableItem from "./component/RiwayatTable/RiwayatTableItem"
import RiwayatTableHeader from "./component/RiwayatTable/RiwayatTableHeader"
import RiwayatTable from "./component/RiwayatTable/RiwayatTable"
import TablePagination from "./component/TablePagination"
import Dropdown from "./component/dropdown/Dropdown"

const DUMMY_DATA_PENGELUARAN = [
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "1",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "2",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "3",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "4",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "5",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },

  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "Lainnya",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "Lainnya",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "Lainnya",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "Lainnya",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "Lainnya",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "Lainnya",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "Lainnya",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "Lainnya",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "Lainnya",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "Lainnya",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "Lainnya",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
]

const PendapatanPage: BlitzPage = () => {
  const [data, setData] = useState(DUMMY_DATA_PENGELUARAN)

  return (
    <section className="font-sans">
      <h1 className="font-bold text-2xl">Performa Keseluruhan Toko</h1>
      <Performa />

      <div className="relative overflow-x-auto shadow-md rounded-lg bg-white mt-5 p-4">
        <h1 className="font-bold text-2xl text-center mt-5">Riwayat Pendapatan</h1>
        <Dropdown items={DUMMY_DATA_PENGELUARAN} setData={setData} />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mt-5 text-gray-700 mt-35 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Search"
        ></input>
        <RiwayatTable>
          <RiwayatTableHeader />
          {data.map((d) => (
            <RiwayatTableItem {...d} key={d.idTransaksi} />
          ))}
        </RiwayatTable>
        <div className="my-3">
          <TablePagination
            items={DUMMY_DATA_PENGELUARAN}
            setCurrentItems={setData}
            itemsPerPage={10}
          />
        </div>
      </div>
    </section>
  )
}

PendapatanPage.getLayout = (page) => (
  <SidebarDashboardProvider>
    <DashboardLayout>{page}</DashboardLayout>
  </SidebarDashboardProvider>
)
PendapatanPage.suppressFirstRenderFlicker = true
export default PendapatanPage
