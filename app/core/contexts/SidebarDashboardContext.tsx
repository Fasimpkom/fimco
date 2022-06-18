import { createContext, FC, ReactNode, useContext, useState } from "react"

interface SidebarContextInterface {
  show: boolean
  onOpen: () => unknown
  onClose: () => unknown
}

const SidebarCtx = createContext<SidebarContextInterface>({
  show: false,
  onOpen: () => {},
  onClose: () => {},
})

export const SidebarDashboardProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [show, setShow] = useState(false)
  const onOpen = () => setShow(true)
  const onClose = () => setShow(false)

  return <SidebarCtx.Provider value={{ show, onOpen, onClose }}>{children}</SidebarCtx.Provider>
}

export const useSidebarDashboard = () => useContext(SidebarCtx)
