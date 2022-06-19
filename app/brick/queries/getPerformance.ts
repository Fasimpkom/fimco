import { resolver } from "blitz"
import db from "db"

export default resolver.pipe(resolver.authorize(), async (_, { session: { userId } }) => {
  const user = await db.user.findUnique({ where: { id: userId } })

  return {
    oneDay: {
      keuntungan: {
        amount: 100000,
        increase: 50000,
        from: 50000,
      },
      pendapatan: {
        amount: 200000,
        increase: 10000,
        from: 190000,
      },
      pengeluaran: {
        amount: 100000,
        increase: 30000,
        from: 70000,
      },
    },
    oneWeek: {
      keuntungan: {
        amount: 800000,
        increase: 200000,
        from: 600000,
      },
      pendapatan: {
        amount: 1000000,
        increase: 300000,
        from: 700000,
      },
      pengeluaran: {
        amount: 200000,
        increase: 10000,
        from: 190000,
      },
    },
    oneMonth: {
      keuntungan: {
        amount: 10000000,
        increase: 5000000,
        from: 5000000,
      },
      pendapatan: {
        amount: 20000000,
        increase: 1000000,
        from: 1900000,
      },
      pengeluaran: {
        amount: 10000000,
        increase: 3000000,
        from: 7000000,
      },
    },
    oneYear: {
      keuntungan: {
        amount: 100000000,
        increase: 50000000,
        from: 50000000,
      },
      pendapatan: {
        amount: 200000000,
        increase: 10000000,
        from: 19000000,
      },
      pengeluaran: {
        amount: 100000000,
        increase: 30000000,
        from: 70000000,
      },
    },
  }

  // if (user?.role === "ADMIN") {
  //   const oneDayAgo = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
  //   const oneWeekAgo = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
  //   const oneMonthAgo = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
  //   const oneYearAgo = new Date(new Date().getTime() - 365 * 24 * 60 * 60 * 1000)

  //   const transactions = await db.transaction.findMany({
  //     where: {
  //       wallet: {
  //         userId: userId,
  //       },
  //       createdAt: {
  //         gte: oneYearAgo,
  //       },
  //     },
  //   })

  //   const oneDTransactions = transactions.filter((t) => {
  //     return t.createdAt.getDate() === oneDayAgo.getDate()
  //   })

  //   const oneWTransactions = transactions.filter((t) => {
  //     return (
  //       t.createdAt.getDate() >= oneDayAgo.getDate() - 6 &&
  //       t.createdAt.getDate() <= oneDayAgo.getDate()
  //     )
  //   })

  //   const oneMTransactions = transactions.filter((t) => {
  //     return (
  //       t.createdAt.getDate() >= oneDayAgo.getDate() - 30 &&
  //       t.createdAt.getDate() <= oneDayAgo.getDate()
  //     )
  //   })

  //   const oneYTransactions = transactions.filter((t) => {
  //     return (
  //       t.createdAt.getDate() >= oneDayAgo.getDate() - 365 &&
  //       t.createdAt.getDate() <= oneDayAgo.getDate()
  //     )
  //   })

  //   const beforeOneDTransactions = transactions.filter((t) => {
  //     return t.createdAt.getDate() < oneDayAgo.getDate()
  //   })

  //   const beforeOneWTransactions = transactions.filter((t) => {
  //     return t.createdAt.getDate() < oneWeekAgo.getDate()
  //   })
  //   const beforeOneMTransactions = transactions.filter((t) => {
  //     return t.createdAt.getMonth() < oneMonthAgo.getMonth()
  //   })

  //   const beforeOneYTransactions = transactions.filter((t) => {
  //     return t.createdAt.getFullYear() < oneYearAgo.getFullYear()
  //   })

  //   beforeOneDTransactions.forEach((t) => {
  //     if (t.type === "IN") {
  //       performance.oneDay.pendapatan.from += t.amount
  //       performance.oneDay.keuntungan.from += t.amount
  //     } else {
  //       performance.oneDay.pengeluaran.from -= t.amount
  //     }
  //   })

  //   beforeOneWTransactions.forEach((t) => {
  //     if (t.type === "IN") {
  //       performance.oneWeek.pendapatan.from += t.amount
  //     } else {
  //       performance.oneWeek.pengeluaran.from -= t.amount
  //     }
  //   }
  //   )

  //   return
  // }

  // const resAccessToken = await axios.get(brickApi.getPublicAccessToken(), {
  //   auth: {
  //     username: brickApi.getClientId(),
  //     password: brickApi.getClientSecret(),
  //   },
  // })

  // const {
  //   data: { access_token },
  // } = resAccessToken.data as GetPublicAccessToken

  // const now = new Date()
  // const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  // const { data } = await axios.get(brickApi.getTransactionList("2022-06-10", "2022-06-17"), {
  //   headers: {
  //     Authorization: `Bearer access-sandbox-602f3a81-5f57-41ce-90d2-437fdd2af13c`,
  //   },
  // })

  // if (data.session === "expired") {
  //   try {
  //     const { data } = await axios.patch(
  //       brickApi.getTransactionMfaList(),
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer access-sandbox-602f3a81-5f57-41ce-90d2-437fdd2af13c`,
  //         },
  //       }
  //     )

  //     console.log(data, "DDDDDDDDDDDDDDDDDDDDDD")
  //   } catch {}
  // }

  // console.log(data, "DATAAAA")
})
