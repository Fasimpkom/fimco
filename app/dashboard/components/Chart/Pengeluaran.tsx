import { FC, useState } from "react"
import { IntervalTabs } from "../IntervalTabs"
import { Chart as ChartJS } from "chart.js/auto"
import { Line, Chart } from "react-chartjs-2"

export const Pengeluaran: FC = () => {
  const [currentData, setCurrentData] = useState<any>(DUMMY_DATA["oneDay"])
  return (
    <div className="font-sans">
      <h2 className="font-bold text-2xl text-black">Pengeluaran Toko</h2>
      <div className="rounded-3xl p-4 bg-white mt-5">
        <h3 className="text-center font-bold text-xl mb-2">Pengeluaran Total</h3>
        <IntervalTabs
          oneDayClick={() => setCurrentData(DUMMY_DATA["oneDay"])}
          oneWeekClick={() => setCurrentData(DUMMY_DATA["oneWeek"])}
          oneMonthClick={() => setCurrentData(DUMMY_DATA["oneMonth"])}
          oneYearClick={() => setCurrentData(DUMMY_DATA["oneYear"])}
          className="mx-auto mb-6"
        />

        <Line datasetIdKey="id" data={currentData} />
      </div>
    </div>
  )
}

const DUMMY_DATA = {
  oneDay: {
    labels: ["07:00", "12:00", "15:00", "18:00"],
    datasets: [
      {
        data: [120000, 100000, 130000, 150000],
        id: "oneDay",
        backgroundColor: "#3B82F6",
        borderColor: "#3B82F6",
        label: "Pengeluaran",
      },
    ],
  },
  oneWeek: {
    labels: [13, 14, 15, 16, 17, 18, 19],
    datasets: [
      {
        data: [150000, 130000, 170000, 230000, 240000, 240000, 290000],
        id: "oneMonth",
        backgroundColor: "#3B82F6",
        borderColor: "#3B82F6",
        label: "Pengeluaran",
      },
    ],
  },
  oneMonth: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [
      {
        data: [
          230000, 210000, 280000, 290000, 220000, 320000, 300000, 350000, 390000, 450000, 470000,
          490000,
        ],
        id: "oneMonth",
        backgroundColor: "#3B82F6",
        borderColor: "#3B82F6",
        label: "Pengeluaran",
      },
    ],
  },
  oneYear: {
    labels: ["Mei", "Jun", "Jul", "Agu", "Sept"],
    datasets: [
      {
        data: [800000, 900000, 1000000, 1100000, 1200000],
        id: "oneYear",
        backgroundColor: "#3B82F6",
        borderColor: "#3B82F6",
        label: "Pengeluaran",
      },
    ],
  },
}
