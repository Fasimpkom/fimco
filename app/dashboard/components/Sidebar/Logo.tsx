import { Image } from "blitz"
import { FC } from "react"

type SidebarLogoProps = {
  className?: string
}
export const SidebarLogo: FC<SidebarLogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-11 h-11 relative mr-4">
        <Image src="/fimco.svg" layout="fill" alt="fimco" />
      </div>
      <span className="font-sans font-bold text-4xl text-black">Fimco</span>
    </div>
  )
}
