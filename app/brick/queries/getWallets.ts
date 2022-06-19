import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(resolver.authorize(), async (_, { session: { userId } }) => {
  if (!userId) return
  const wallets = await db.walletAccount.findMany({
    where: {
      userId,
    },
    select: {
      identifier: true,
      bank: {
        select: {
          name: true,
        },
      },
    },
  })

  const data = wallets.map(({ identifier, bank }) => ({
    identifier,
    name: bank?.name ?? "",
  }))

  return data
})
