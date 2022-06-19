import { FC, ReactNode } from "react"

type RiwayatTableProps = {
  children: ReactNode
}

const RiwayatTable: FC<RiwayatTableProps> = ({ children }) => {
  return (
    <div className="rounded border border-gray-200 mt-5 divide-y overflow-x-scroll">{children}</div>
  )
}

export default RiwayatTable
