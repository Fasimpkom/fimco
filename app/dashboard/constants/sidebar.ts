type SidebarDisclosure = {
  name: string
  icon: string
  path: string
}

type SidebarItem = Omit<SidebarDisclosure, "path"> & {
  path?: string
  isDisclosure: boolean
  disclosureItems: SidebarDisclosure[]
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    name: "Dashboard",
    icon: "/icons/dashboard/house.svg",
    path: "/dashboard",
    isDisclosure: false,
    disclosureItems: [],
  },
  {
    name: "Akuntantsi",
    icon: "/icons/dashboard/account_balance.svg",
    isDisclosure: true,
    disclosureItems: [
      {
        name: "Pengeluaran",
        icon: "/icons/dashboard/north_east.svg",
        path: "/akuntansi/pengeluaran",
      },
      {
        name: "Pendapatan",
        icon: "/icons/dashboard/south_west.svg",
        path: "/akuntansi/pendapatan",
      },
    ],
  },
  {
    name: "Konfigurasi",
    icon: "/icons/dashboard/settings.svg",
    path: "/konfigurasi",
    isDisclosure: false,
    disclosureItems: [],
  },
]
