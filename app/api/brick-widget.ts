import { BlitzApiRequest, BlitzApiResponse, getSession } from "blitz"
import db from "db"
interface BrickWidgetBody {
  bankId: string
  accessToken: string
  userId: string
}

const handler = async (req: BlitzApiRequest, res: BlitzApiResponse) => {
  console.log("HELLLLOOO")
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })

  // const data: BrickWidgetBody[] = req.body
  // for (const d of data) {
  //   console.log(d)
  //   await db.walletAccount.upsert({
  //     where: {
  //       bankId_userId: {
  //         bankId: Number(d.bankId),
  //         userId: d.userId,
  //       },
  //     },
  //     update: {
  //       accessToken: d.accessToken,
  //     },
  //     create: {
  //       bankId: Number(d.bankId),
  //       userId: d.userId,
  //       accessToken: d.accessToken,
  //     },
  //   })
  // }
  return res.status(200).send("OK")
}

export default handler
