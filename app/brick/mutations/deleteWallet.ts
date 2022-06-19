import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const identifier = z.string()
export default resolver.pipe(resolver.authorize(), resolver.zod(identifier), async (identifier) => {
  await db.walletAccount.delete({
    where: {
      identifier,
    },
  })
})
