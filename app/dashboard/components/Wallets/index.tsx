import getWallets from "app/brick/queries/getWallets"
import { Image, useQuery } from "blitz"
import { FC, Suspense, useState } from "react"
import { AddResourceModal } from "../Modals/AddResource"
import { WalletCard } from "./Card"

const AllWallets: FC = () => {
  const [wallets] = useQuery(getWallets, null)
  const comps = wallets?.map((w) => <WalletCard key={w.identifier} {...w} />)
  if (!comps?.length)
    return (
      <div className="w-72 h-96 relative">
        <Image src="/images/empty_config.png" layout="fill" objectFit="contain" alt="empty" />
      </div>
    )
  return <>{comps}</>
}

export const Wallets: FC = () => {
  const [show, setShow] = useState(false)
  const onClose = () => setShow(false)
  const onOpen = () => setShow(true)
  const onAdd = () => {}
  return (
    <div className="flex flex-col space-y-4">
      <p className="font-sans text-gray-500 font-bold text-xl">Sumber Data</p>
      <Suspense fallback="Loading...">
        <AllWallets />
      </Suspense>
      <button
        onClick={onOpen}
        className="flex justify-center items-center bg-blue-500 rounded-md py-[10px] px-5 w-full"
      >
        <span className="mr-3 font-semibold text-sm text-white">Tambah Baru</span>
        <Image src="/icons/dashboard/add.svg" objectFit="contain" width={18} height={18} />
      </button>
      <Suspense fallback="Loading...">
        <AddResourceModal show={show} onClose={onClose} />
      </Suspense>
    </div>
  )
}

const DUMMY_DATA = [
  {
    name: "Tokopedia",
    identifier: "taufik@pragusga.com",
  },
  {
    name: "OVO",
    identifier: "0123456789",
  },
  {
    name: "Gopay",
    identifier: "0876765545454",
  },
]
