import getPerformance from "app/brick/queries/getPerformance"
import { useQuery } from "blitz"
import { FC, useState } from "react"
import { IntervalTabs } from "../IntervalTabs"
import { PerformaCard } from "./Card"

export const Performa: FC = () => {
  const [data] = useQuery(getPerformance, null)
  const [currentData, setCurrentData] = useState(data["oneDay"])
  return (
    <div className="font-sans">
      <IntervalTabs
        oneDayClick={() => setCurrentData(data["oneDay"])}
        oneWeekClick={() => setCurrentData(data["oneWeek"])}
        oneMonthClick={() => setCurrentData(data["oneMonth"])}
        oneYearClick={() => setCurrentData(data["oneYear"])}
      />
      <div>
        {DUMMY_DATA.map((d) => (
          <PerformaCard
            {...d}
            key={d.title}
            value={currentData[d.type].amount}
            secondaryValue={currentData[d.type].increase}
            fromValue={currentData[d.type].from}
          />
        ))}
      </div>
    </div>
  )
}

const DUMMY_DATA = [
  {
    type: "keuntungan" as const,
    icon: "/icons/dashboard/trending_up.svg",
    title: "Keuntungan Toko",
    value: 80000,
    secondaryValue: 100,
    fromValue: 10,
    profit: true,
  },
  {
    type: "pendapatan" as const,
    icon: "/icons/dashboard/south_west_1.svg",
    title: "Keuntungan Toko",
    value: 80000,
    secondaryValue: 100,
    fromValue: 10,
    profit: true,
    seeMore: "/akuntansi/pendapatan",
  },
  {
    type: "pengeluaran" as const,
    icon: "/icons/dashboard/north_east_1.svg",
    title: "Keuntungan Toko",
    value: 80000,
    secondaryValue: 100,
    fromValue: 10,
    profit: false,
    seeMore: "/akuntansi/pengeluaran",
  },
]

const DUMMY_DATA_PENGELUARAN = [
  {
    type: "pengeluaran" as const,
    icon: "/icons/dashboard/trending_up.svg",
    title: "Keuntungan Toko",
    value: 80000,
    secondaryValue: 100,
    fromValue: 10,
    profit: true,
    seeMore: "/",
  },
  {
    type: "pengeluaran" as const,
    icon: "/icons/dashboard/south_west_1.svg",
    title: "Keuntungan Toko",
    value: 80000,
    secondaryValue: 100,
    fromValue: 10,
    profit: true,
    seeMore: "/",
  },
  {
    type: "pengeluaran" as const,
    icon: "/icons/dashboard/north_east_1.svg",
    title: "Keuntungan Toko",
    value: 80000,
    secondaryValue: 100,
    fromValue: 10,
    profit: false,
    seeMore: "/",
  },
]
const DUMMY_DATA_PENDAPATAN = [
  {
    type: "pendapatan" as const,
    icon: "/icons/dashboard/trending_up.svg",
    title: "Keuntungan Toko",
    value: 80000,
    secondaryValue: 100,
    fromValue: 10,
    profit: true,
    seeMore: "/",
  },
  {
    type: "pendapatan" as const,
    icon: "/icons/dashboard/south_west_1.svg",
    title: "Keuntungan Toko",
    value: 80000,
    secondaryValue: 100,
    fromValue: 10,
    profit: true,
    seeMore: "/",
  },
  {
    type: "pendapatan" as const,
    icon: "/icons/dashboard/north_east_1.svg",
    title: "Keuntungan Toko",
    value: 80000,
    secondaryValue: 100,
    fromValue: 10,
    profit: false,
    seeMore: "/",
  },
]
