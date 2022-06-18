import { ReactNode } from "react"
import { FC } from "react"
import { Image } from "next/image"
import { Link } from "blitz"

type CardProps = {
  thumbnail?: string
  title: string
  content: string
  children?: ReactNode
  detail?: string
}

const Card: FC<CardProps> = ({ title, thumbnail, content, children, detail }) => {
  return (
    <div className="bg-white rounded min-w-[350px]">
      <div className="flex justify-between m-5">
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
      {detail && (
        <div className="mt-4 bg-gray-200 rounded-bl rounded-br">
          <div className="p-3 ml-3">
            <Link href={"google.com"}>
              <a className="text-blue-600 font-bold">Lihat Selengkapnya</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
