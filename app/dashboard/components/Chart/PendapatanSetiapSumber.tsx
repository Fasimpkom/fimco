import { FC, useState } from "react"
import { IntervalTabs } from "../IntervalTabs"
// import { Chart as ChartJS, registerables } from "chart.js"
import { Chart as ChartJS } from "chart.js/auto"
import { Line, Chart } from "react-chartjs-2"
import { Router } from "blitz"
// ChartJS.register(...registerables)

export const PendapatanSetiapSumber: FC<{ type?: string }> = ({ type }) => {
  const text = type === "pengeluaran" ? "Pengeluaran" : "Pendapatan"
  const redirect = type === "pengeluaran" ? "/akuntansi/pengeluaran" : "/akuntansi/pendapatan"
  const [currentData, setCurrentData] = useState<any>(DUMMY_DATA["oneDay"])
  return (
    <div className="font-sans">
      <div className="rounded-3xl p-4 bg-white mt-5">
        <h3 className="text-center font-bold text-xl mb-2">{text} Setiap Sumber</h3>
        <IntervalTabs
          oneDayClick={() => setCurrentData(DUMMY_DATA["oneDay"])}
          oneWeekClick={() => setCurrentData(DUMMY_DATA["oneWeek"])}
          oneMonthClick={() => setCurrentData(DUMMY_DATA["oneMonth"])}
          oneYearClick={() => setCurrentData(DUMMY_DATA["oneYear"])}
          className="mx-auto mb-6"
        />

        <Line datasetIdKey="id" data={currentData} />
      </div>

      <button
        onClick={() => Router.push(redirect)}
        className="flex mt-5 justify-center items-center bg-blue-500 rounded-md py-[10px] px-5 w-full"
      >
        <span className="font-semibold text-sm text-white">Lihat Selengkapnya</span>
      </button>
    </div>
  )
}

const DUMMY_DATA = {
  oneDay: {
    labels: ["07:00", "12:00", "15:00", "18:00"],
    datasets: [
      {
        label: "Lainnya",
        data: [120000, 100000, 130000, 150000],
        id: "oneDay",
        backgroundColor: "#3B82F6",
        borderColor: "#3B82F6",
      },
      {
        label: "Gopay",
        data: [90000, 100000, 60000, 150000],
        id: "oneDay",
        backgroundColor: "#10B981",
        borderColor: "#10B981",
      },
      {
        label: "Ovo",
        data: [300000, 200000, 100000, 150000],
        id: "oneDay",
        backgroundColor: "#F59E0B",
        borderColor: "#F59E0B",
      },
    ],
  },
  oneWeek: {
    labels: [13, 14, 15, 16, 17, 18, 19],
    datasets: [
      {
        label: "Lainnya",
        data: [150000, 130000, 170000, 230000, 240000, 240000, 290000],
        id: "oneMonth",
        backgroundColor: "#3B82F6",
        borderColor: "#3B82F6",
      },
      {
        label: "Gopay",
        data: [90000, 100000, 60000, 150000, 120000, 170000, 180000],
        id: "oneMonth",
        backgroundColor: "#10B981",
        borderColor: "#10B981",
      },
      {
        label: "Ovo",
        data: [300000, 200000, 100000, 150000, 130000, 170000, 150000],
        id: "oneMonth",
        backgroundColor: "#F59E0B",
        borderColor: "#F59E0B",
      },
    ],
  },
  oneMonth: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [
      {
        label: "Keuntungan",
        data: [
          230000, 210000, 280000, 290000, 220000, 320000, 300000, 350000, 390000, 450000, 470000,
          490000,
        ],
        id: "1",
        backgroundColor: "#3B82F6",
        borderColor: "#3B82F6",
      },
      {
        label: "Gopay",
        data: [100000, 200000, 100000, 150000, 120000, 170000, 180000, 190000, 200000, 210000],
        id: "2",
        backgroundColor: "#10B981",
        borderColor: "#10B981",
      },
      {
        label: "Ovo",
        data: [300000, 200000, 100000, 150000, 130000, 170000, 150000, 160000, 170000, 180000],
        id: "3",
        backgroundColor: "#F59E0B",
        borderColor: "#F59E0B",
      },
    ],
  },
  oneYear: {
    labels: ["Mei", "Jun", "Jul", "Agu", "Sept"],
    datasets: [
      {
        label: "Keuntungan",
        data: [800000, 900000, 1000000, 1100000, 1200000],
        id: "1",
        backgroundColor: "#3B82F6",
        borderColor: "#3B82F6",
      },
      {
        label: "Gopay",
        data: [200000, 300000, 400000, 500000, 600000],
        id: "2",
        backgroundColor: "#10B981",
        borderColor: "#10B981",
      },
      {
        label: "Ovo",
        data: [100000, 200000, 300000, 400000, 500000],
        id: "3",
        backgroundColor: "#F59E0B",
        borderColor: "#F59E0B",
      },
    ],
  },
}
