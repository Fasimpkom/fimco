import { Image } from "blitz"
import { FC } from "react"
import { PerformaCard } from "./Card"

export const Performa: FC = () => {
  return (
    <div className="font-sans">
      <p className="flex items-center text-blue-500 font-semibold">
        <span>Menampilkan 7 hari terakhir</span>
        <i className="ml-2 flex items-center">
          <Image
            src="/icons/dashboard/keyboard_arrow_down_blue.svg"
            width={16}
            height={16}
            alt="down"
          />
        </i>
      </p>

      <div>
        {DUMMY_DATA.map((d) => (
          <PerformaCard {...d} key={d.title} />
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
