import { Dialog } from "@headlessui/react"
import generateWalletToken from "app/brick/mutations/generateWalletToken"
import verifyWallet from "app/brick/mutations/verifyWallet"
import getListInstitutions from "app/brick/queries/getListInstitutions"
import getWallets from "app/brick/queries/getWallets"
import { invalidateQuery, useMutation, useQuery } from "blitz"
import { FC, useState } from "react"

type AddResourceModalProps = {
  show: boolean
  onClose: () => unknown
}

export const AddResourceModal: FC<AddResourceModalProps> = ({ show, onClose }) => {
  const [institutions] = useQuery(getListInstitutions, null)
  const [verify, { isLoading, isSuccess }] = useMutation(verifyWallet)
  const [generate, { isLoading: isGen }] = useMutation(generateWalletToken)

  const [isOtp, setIsOtp] = useState(false)

  const [otp, setOtp] = useState("")
  const [data, setData] = useState({
    institutionId: 0,
    username: "",
  })

  const [res, setRes] = useState({
    accessToken: "",
    username: "",
    uniqueId: "",
    sessionId: "",
    otpToken: "",
  })

  const onVerify = async () => {
    const { institutionId, username: u } = data
    try {
      const { accessToken, otpToken, sessionId, uniqueId, username } = await verify({
        institutionId,
        username: u,
      })
      setIsOtp(true)
      setRes({
        accessToken,
        username,
        uniqueId,
        sessionId,
        otpToken,
      })
    } catch {}
  }

  const onGenerate = async () => {
    const { institutionId, username } = data
    try {
      await generate({ ...res, otp, bankId: institutionId, username })
      await invalidateQuery(getWallets)
      onClose()
      setIsOtp(false)
      setData({
        institutionId: 0,
        username: "",
      })
    } catch {}
  }

  return (
    <Dialog open={show} onClose={onClose} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-10">
            <Dialog.Title className="font-bold text-lg font-sans text-black text-center">
              Tambah Sumber Data
            </Dialog.Title>

            <div className="mt-5">
              {!isOtp && (
                <div>
                  <p className="mb-1 font-medium text-sm">Pilih Tipe Layanan</p>
                  <select
                    className="form-select rounded-md"
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        institutionId: parseInt(e.target.value),
                      }))
                    }
                  >
                    {institutions?.map((institution) => (
                      <option key={institution.id} value={institution.id}>
                        {institution.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {isOtp && (
                <>
                  <div className="mt-4">
                    <p className="mb-1 font-medium text-sm">Kode OTP</p>
                    <input
                      className="form-input rounded-md"
                      placeholder="OTP"
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={onGenerate}
                    disabled={isGen}
                    className="flex justify-center mt-4 items-center bg-blue-500 rounded-md py-[10px] px-5 w-full"
                  >
                    <span className="mr-3 font-semibold text-sm text-white">Verifikasi</span>
                  </button>
                </>
              )}
              {!!data.institutionId && !isOtp && (
                <>
                  <div className="mt-4">
                    <p className="mb-1 font-medium text-sm">Nomor HP</p>
                    <input
                      type="tel"
                      className="form-input rounded-md"
                      placeholder="08123xxxxx"
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          username: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <button
                    onClick={onVerify}
                    disabled={isLoading}
                    className="flex justify-center mt-4 items-center bg-blue-500 rounded-md py-[10px] px-5 w-full"
                  >
                    <span className="mr-3 font-semibold text-sm text-white">Kirim OTP</span>
                  </button>
                </>
              )}
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}
