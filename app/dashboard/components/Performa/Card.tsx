import { Image } from "blitz"
import { FC } from "react"

type PerformaCardProps = {
  title: string
  value: number
  secondaryValue: number
  fromValue: number
  profit: boolean
  icon: string
  seeMore?: string
  type: "pendapatan" | "pengeluaran" | "keuntungan"
  className?: string
}

export const PerformaCard: FC<PerformaCardProps> = ({
  title,
  value,
  secondaryValue,
  fromValue,
  profit,
  seeMore,
  type,
  icon,
  className,
}) => {
  const trendingUp = profit
    ? "/icons/dashboard/trending_up_green.svg"
    : "/icons/dashboard/trending_up_red.svg"

  return (
    <div className={`rounded-xl shadow-md ${className}`}>
      <div className="p-5 flex items-center">
        <div className="grid place-items-center w-14 bg-blue-600 h-14 mr-4 rounded-lg">
          <Image src={icon} width={32} height={32} alt={type} />
        </div>

        <div className="flex flex-col justify-center space-y-2 font-sans">
          <span className="text-base font-medium text-gray-400">{title}</span>
          <span className="text-2xl leading-8 font-bold text-black">{value}</span>
          <div className="flex items-center">
            <div
              className={`p-1 flex items-center rounded-[200px] ${
                profit ? "bg-green-50" : "bg-red-50"
              }`}
            >
              <Image src={trendingUp} alt="trendingUp" width={24} height={24} />
              <span
                className={`text-sm leading-5 font-bold ml-1 ${
                  profit ? "text-green-500" : "text-red-500"
                }`}
              >
                {secondaryValue}
              </span>
            </div>
            <span className="text-xs leading-4 ml-2 font-medium text-gray-500">
              dari {fromValue}
            </span>
          </div>
        </div>
      </div>
      {seeMore && (
        <div className="py-4 px-9 bg-gray-100">
          <span className="text-sm font-semibold text-blue-500">Lihat Selengkapnya</span>
        </div>
      )}
    </div>
  )
}
