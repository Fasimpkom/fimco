import { FC, ReactNode } from "react"
import { string } from "zod"

type ButtonProps = {
  style?: string
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <button className="bg-blue-500 p-3 rounded text-white min-w-[100px] ">{children}</button>
}

export default Button
