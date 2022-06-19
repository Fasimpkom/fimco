import deleteWallet from "app/brick/mutations/deleteWallet"
import getWallets from "app/brick/queries/getWallets"
import { Image, invalidateQuery, useMutation } from "blitz"
import { FC } from "react"

type WalletCardProps = {
  logo?: string
  name: string
  identifier: string
}

export const WalletCard: FC<WalletCardProps> = ({ logo, name, identifier }) => {
  const [removeWallet] = useMutation(deleteWallet)
  const onDelete = async () => {
    try {
      await removeWallet(identifier)
      await invalidateQuery(getWallets)
    } catch {}
  }

  return (
    <div className="rounded-3xl p-5 bg-white">
      <div className="flex items-center justify-between">
        <div className="w-14 h-14 relative">
          <Image
            src={logo ?? "/icons/dashboard/box_wallet.svg"}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <button
          onClick={onDelete}
          className="flex items-center text-red-500 bg-white border border-red-500 rounded-md py-[10px] px-5"
        >
          <span className="mr-3 font-semibold text-sm">Hapus</span>
          <Image src="/icons/dashboard/delete.svg" objectFit="contain" width={18} height={18} />
        </button>
      </div>

      <div className="mt-3">
        <p className="font-medium text-base text-gray-500">{name}</p>
        <p className="font-bold text-xl font-sans mt-2">{identifier}</p>
      </div>
    </div>
  )
}
