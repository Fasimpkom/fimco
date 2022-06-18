import { FC, ReactNode } from "react"

type DividerProps = {
  className?: string
}
export const Divider: FC<DividerProps> = ({ className }) => (
  <div className={`w-full h-[1px] bg-gray-300 ${className}`} />
)
