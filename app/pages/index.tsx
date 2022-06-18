import { BlitzPage, useQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import getPublicAccessToken from "app/brick/queries/getPublicAccessToken"
import { Suspense } from "react"
import getListInstitutions from "app/brick/queries/getListInstitutions"
import { brickApi } from "app/brick/api"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

const Home: BlitzPage = () => {
  const [accessToken] = useQuery(getPublicAccessToken, null)
  const [institutions] = useQuery(getListInstitutions, null)
  const user = useCurrentUser()
  return (
    <section>
      <button onClick={() => brickApi.launchBrickWidget(accessToken.access_token, user?.id ?? "")}>
        Lauch Brick Widget
      </button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(accessToken, null, 2)}</pre>
      <pre>{JSON.stringify(institutions, null, 2)}</pre>
    </section>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => (
  <Layout title="Home">
    <Suspense fallback={"Loading..."}>{page}</Suspense>
  </Layout>
)

export default Home
