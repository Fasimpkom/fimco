import { BlitzApiRequest, BlitzApiResponse } from "blitz"

interface BrickWidgetBody {
  bankId: string
  accessToken: string
}

const handler = async (req: BlitzApiRequest, res: BlitzApiResponse) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })

  const data: BrickWidgetBody[] = req.body
  console.log(data)
  return res.status(200).send("OK")
}

export default handler
