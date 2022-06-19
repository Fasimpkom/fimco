import axios from "axios"
import { resolver } from "blitz"
import { brickApi } from "app/brick/api"
import { GetPublicAccessToken } from "app/brick/types"
import { z } from "zod"

const Input = z.object({
  institutionId: z.number(),
  username: z.string(),
})
export default resolver.pipe(resolver.zod(Input), async ({ institutionId, username }) => {
  const resAccessToken = await axios.get(brickApi.getPublicAccessToken(), {
    auth: {
      username: brickApi.getClientId(),
      password: brickApi.getClientSecret(),
    },
  })

  const {
    data: { access_token },
  } = resAccessToken.data as GetPublicAccessToken

  const {
    data: {
      data: { username: u, uniqueId, sessionId, otpToken },
    },
  } = await axios.post(
    `${brickApi.getAuth()}`,
    {
      institution_id: institutionId,
      username,
    },
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  )

  return {
    username: u,
    uniqueId,
    sessionId,
    otpToken,
    accessToken: access_token,
  }
})
