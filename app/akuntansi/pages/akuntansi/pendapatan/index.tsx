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
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Pendapatan total",
    },
  },
}

const labels = [11, 12, 13, 14, 15]

export const dataDummy = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.random() * 300000),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
}

const PendapatanPage: BlitzPage = () => {
  const [data, setData] = useState(DUMMY_DATA_PENGELUARAN)
  const [paginationData, setPaginationData] = useState(data)

  return (
    <section className="font-sans">
      <h1 className="font-bold text-2xl">Performa Keseluruhan Toko</h1>
      <Performa />

      <div className="relative overflow-x-auto shadow-md rounded-lg bg-white mt-5 p-4">
        <div className="bg-gray-200 mb-5 rounded grid grid-cols-4 mx-3 px-2 py-1 text-center">
          <div className="rounded py-3">1 Minggu</div>
          <div className="rounded py-3">1 Bulan</div>
          <div className="rounded py-3">1 Tahun </div>
        </div>
        <Line options={options} data={dataDummy} />
      </div>

      <div className="relative overflow-x-auto shadow-md rounded-lg bg-white mt-5 p-4">
        {/* Pendapatan Total */}
        {/* Riwayat pendapatan */}

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
          {paginationData.map((d) => (
            <RiwayatTableItem {...d} key={d.idTransaksi} />
          ))}
        </RiwayatTable>
        <div className="my-3">
          <TablePagination items={data} setCurrentItems={setPaginationData} itemsPerPage={10} />
        </div>
      </div>
    </section>
  )
}

const DUMMY_DATA_PENGELUARAN = [
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "OVO",
    jumlah: "Rp203.000,00",

    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "OVO",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "OVO",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "OVO",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "OVO",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "Tokopedia",
    jumlah: "Rp203.000,00",
    actionType: "delete" as const,
  },
  {
    idTransaksi: "#121313",
    tanggal: "18 Juni 2022 08:23 WIB",
    sumber: "Tokopedia",
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

PendapatanPage.getLayout = (page) => (
  <SidebarDashboardProvider>
    <DashboardLayout>{page}</DashboardLayout>
  </SidebarDashboardProvider>
)
PendapatanPage.suppressFirstRenderFlicker = true
export default PendapatanPage
