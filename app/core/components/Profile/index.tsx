import { Image, useSession } from "blitz"
import { FC } from "react"

export const Profile: FC = () => {
  const session = useSession()
  const isLoggedIn = !!session.userId
  return (
    <div className="flex items-center bg-white">
      {isLoggedIn ? (
        <>
          <div className="rounded-full w-10 h-10 overflow-hidden relative">
            <Image src="/images/slebew.png" alt="profile" layout="fill" />
          </div>
          <div className="w-4 h-4 overflow-hidden relative ml-3">
            <Image src="/icons/dashboard/arrow_drop_down.svg" alt="arrow" layout="fill" />
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => {}}
            className="flex mt-5 justify-center items-center bg-white border border-gray-100 rounded-md py-[10px] px-5 w-full"
          >
            <span className="font-semibold text-sm text-black">Login</span>
          </button>
          <button
            onClick={() => {}}
            className="flex mt-5 justify-center items-center bg-blue-500 rounded-md py-[10px] px-5 w-full"
          >
            <span className="font-semibold text-sm text-white">Signup</span>
          </button>
        </>
      )}
    </div>
  )
}
