import { ReactNode } from "react"
import { FC } from "react"
import { Image } from "next/image"

type CardProps = {
  thumbnail?: string
  title: string
  content: string
  children?: ReactNode
}

const Card: FC<CardProps> = ({ title, thumbnail, content, children }) => {
  return (
    <div className="flex bg-white rounded p-5 min-w-[350px] justify-between">
      {/* thumbnail */}
      <div className="flex">
        {thumbnail && <Image src={thumbnail} alt="a picture"></Image>}
        {/* title */}
        <div className="ml-3">
          <div className="text-gray-400">{title}</div>
          {/* content */}
          <div className="font-bold">{content}</div>
        </div>
      </div>
      {/* action */}
      <div>{children || ""}</div>
    </div>
  )
}

export default Card
