const BASE_URL = process.env.BRICK_BASE_API_URL
const DOMAIN_URL = process.env.BLITZ_PUBLIC_DOMAIN_URL || "https://41ec-182-2-134-157.ap.ngrok.io"

export const brickApi = {
  getPublicAccessToken: () => `${BASE_URL}/auth/token`,
  getListInstutions: () => `${BASE_URL}/institution/list`,
  getClientId: () => process.env.BRICK_CLIENT_ID || "",
  getClientSecret: () => process.env.BRICK_CLIENT_SECRET || "",
  launchBrickWidget: (accessToken: string, userId: string) => {
    if (typeof window !== "undefined") {
      const widthScreen = window.innerWidth
      let width = 400
      if (widthScreen < 320) {
        width = 310
      }
      const left = window.innerWidth / 2 - width / 2
      const top = window.innerHeight / 2 - 600 / 2

      window.open(
        `https://cdn.onebrick.io/sandbox-widget/v1/?accessToken=${accessToken}&redirect_url=${DOMAIN_URL}/api/brick-widget&user_id=${userId}`,
        "_blank",
        `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, top=${top}, left=${left}, width=${width}, height=600`
      )
    }
  },
}
