import { SidebarDashboardProvider } from "app/core/contexts/SidebarDashboardContext"
import { DashboardLayout } from "app/core/layouts/DashboardLayout"
import { Performa } from "app/dashboard/components/Performa"
import { BlitzPage } from "blitz"
import { Menu, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import DropdownItem from "./component/DropdownItem"
import RiwayatTableItem from "./component/RiwayatTable/RiwayatTableItem"
import RiwayatTableHeader from "./component/RiwayatTable/RiwayatTableHeader"
import RiwayatTable from "./component/RiwayatTable/RiwayatTable"
import TablePagination from "./component/TablePagination"

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
        <Menu as="div" className="flex justify-center w-full  text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border mt-5 border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              Semua Sumber
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
                <DropdownItem>Semua Sumber</DropdownItem>
              </div>
              <div className="py-1">
                <DropdownItem>OVO</DropdownItem>
                <DropdownItem>Tokopedia</DropdownItem>
                <DropdownItem>Lainnya</DropdownItem>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
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
            itemsPerPage={3}
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
