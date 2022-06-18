import axios from "axios"
import { resolver } from "blitz"
import { brickApi } from "app/brick/api"
import { GetPublicAccessToken } from "app/brick/types"

export default resolver.pipe(async () => {
  const resAccessToken = await axios.get(brickApi.getPublicAccessToken(), {
    auth: {
      username: brickApi.getClientId(),
      password: brickApi.getClientSecret(),
    },
  })

  const { data } = resAccessToken.data as GetPublicAccessToken

  console.log(data)
  return data
})
