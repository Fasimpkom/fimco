import axios from "axios"
import { resolver } from "blitz"
import { brickApi } from "app/brick/api"
import { z } from "zod"
import db from "db"

const Input = z.object({
  username: z.string(),
  uniqueId: z.string(),
  sessionId: z.string(),
  otpToken: z.string(),
  accessToken: z.string(),
  otp: z.string(),
  bankId: z.number(),
})

export default resolver.pipe(
  resolver.zod(Input),
  async (
    { username, uniqueId, sessionId, otpToken, accessToken, otp, bankId },
    { session: { userId } }
  ) => {
    if (!userId) return

    const { data } = await axios.post(
      `${brickApi.getGopay()}`,
      {
        username,
        uniqueId,
        sessionId,
        otpToken,
        otp,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    await db.walletAccount.upsert({
      where: {
        identifier: username,
      },
      update: {
        bankId,
        userId,
        accessToken: data?.data ?? "",
      },
      create: {
        bankId,
        userId,
        accessToken: data?.data ?? "",
        identifier: username,
      },
    })
  }
)
