const BASE_URL = process.env.BRICK_BASE_API_URL
const DOMAIN_URL =
  process.env.BLITZ_PUBLIC_DOMAIN_URL ||
  "http://ead0-2001-448a-2040-44bc-6ccd-4c67-8a45-6666.ngrok.io"

export const brickApi = {
  getPublicAccessToken: () => `${BASE_URL}/auth/token`,
  getListInstutions: () => `${BASE_URL}/institution/list`,
  getClientId: () => process.env.BRICK_CLIENT_ID || "",
  getClientSecret: () => process.env.BRICK_CLIENT_SECRET || "",
  launchBrickWidget: (accessToken: string) => {
    if (typeof window !== "undefined") {
      window.open(
        `https://cdn.onebrick.io/sandbox-widget/v1/?accessToken=${accessToken}&redirect_url=${DOMAIN_URL}/api/brick-widget`
      )
    }
  },
}
