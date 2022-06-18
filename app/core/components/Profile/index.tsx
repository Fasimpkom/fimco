import { Image } from "blitz"
import { FC } from "react"

export const Profile: FC = () => {
  return (
    <div className="flex items-center bg-white">
      <div className="rounded-full w-10 h-10 overflow-hidden relative">
        <Image src="/images/slebew.png" alt="profile" layout="fill" />
      </div>
      <div className="w-4 h-4 overflow-hidden relative ml-3">
        <Image src="/icons/dashboard/arrow_drop_down.svg" alt="arrow" layout="fill" />
      </div>
    </div>
  )
}
