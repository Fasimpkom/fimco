import { FC } from "react"

type RiwayatTableItemProps = {
  idTransaksi: string
  tanggal: string
  sumber: string
  jumlah: number
  actionType?: "delete" | "update"
}

const RiwayatTableItem: FC<RiwayatTableItemProps> = ({
  idTransaksi,
  tanggal,
  sumber,
  jumlah,
  actionType,
}) => {
  return (
    <div className="p-3 grid grid-cols-5 min-w-[650px]">
      <div>{idTransaksi}</div>
      <div>{tanggal}</div>
      <div>{sumber}</div>
      <div>{jumlah}</div>
      <div>{actionType}</div>
      <div></div>
    </div>
  )
}

export default RiwayatTableItem
