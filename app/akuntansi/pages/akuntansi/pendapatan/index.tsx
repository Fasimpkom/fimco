import { SidebarDashboardProvider } from "app/core/contexts/SidebarDashboardContext"
import { DashboardLayout } from "app/core/layouts/DashboardLayout"
import { Performa } from "app/dashboard/components/Performa"
import { BlitzPage } from "blitz"
import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"

const PendapatanPage: BlitzPage = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <section className="font-sans">
      <h1 className="font-bold text-2xl">Performa Keseluruhan Toko</h1>
      <Performa />

      {/* graph */}
      <div className="relative overflow-x-auto shadow-md rounded-lg bg-white mt-5 p-4">
        <h1 className="font-bold text-2xl text-center mt-5">Riwayat Pendapatan</h1>
        <Menu as="div" className="flex justify-center w-full  text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border mt-5 border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              Semua Sumber
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute top-[8em] mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Semua Sumber
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      OVO
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Tokopedia
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Lainnya
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mt-5 text-gray-700 mt-35 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Search"
        ></input>
        <div className="rounded border border-gray-200 mt-5 divide-y overflow-x-scroll">
          <div className="p-3 flex bg-gray-100 justify-between min-w-[650px]">
            <div>ID transaksi</div>
            <div>Tanggal Transaksi</div>
            <div>Sumber</div>
            <div>Jumlah</div>
            <div>Aksi</div>
            <div></div>
          </div>
          <div className="p-3 flex justify-between min-w-[650px]">
            <div>#121313</div>
            <div>18 Juni 2022 08:23 WIB</div>
            <div>Lainnya</div>
            <div>Rp203.000,00</div>
            <div>Aksi</div>
            <div></div>
          </div>
          <div className="p-3 flex justify-between min-w-[650px]">
            <div>#121313</div>
            <div>18 Juni 2022 08:23 WIB</div>
            <div>Lainnya</div>
            <div>Rp203.000,00</div>
            <div>Aksi</div>
            <div></div>
          </div>
          <div className="p-3 flex justify-between min-w-[650px]">
            <div>#121313</div>
            <div>18 Juni 2022 08:23 WIB</div>
            <div>Lainnya</div>
            <div>Rp203.000,00</div>
            <div>Aksi</div>
            <div></div>
          </div>
        </div>
        <div className="my-3">
          <div className="text-center mt-5 text-gray-400">Menampilkan 1-10 dari 97</div>
          <div className="divide-x grid grid-flow-col border mt-5 border-gray-100 mx-[5em]">
            <div className="text-center">1</div>
            <div className="text-center">2</div>
            <div className="text-center">...</div>
            <div className="text-center">9</div>
            <div className="text-center">10</div>
          </div>
        </div>

        {/* <table className="text-sm text-left text-gray-500 dark:text-gray-400 mt-6">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id Transaksi
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal Transaksi
              </th>
              <th scope="col" className="px-6 py-3">
                Sumber
              </th>
              <th scope="col" className="px-6 py-3">
                Jumlah
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Aksi</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b text-black">
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                #12312333
              </th>
              <td className="px-6 py-4">18 Juni 2022 09:23 WIB</td>
              <td className="px-6 py-4">Lainnya</td>
              <td className="px-6 py-4">Rp239.000,00</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className=" text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b text-black">
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                #12312333
              </th>
              <td className="px-6 py-4">18 Juni 2022 09:23 WIB</td>
              <td className="px-6 py-4">Lainnya</td>
              <td className="px-6 py-4">Rp239.000,00</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className=" text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b text-black">
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                #12312333
              </th>
              <td className="px-6 py-4">18 Juni 2022 09:23 WIB</td>
              <td className="px-6 py-4">Lainnya</td>
              <td className="px-6 py-4">Rp239.000,00</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className=" text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </section>
  )
}

PendapatanPage.getLayout = (page) => (
  <SidebarDashboardProvider>
    <DashboardLayout>{page}</DashboardLayout>
  </SidebarDashboardProvider>
)
PendapatanPage.suppressFirstRenderFlicker = true
export default PendapatanPage
