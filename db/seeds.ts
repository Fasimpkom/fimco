import db from "db"

import { brickApi } from "app/brick/api"
import { GetPublicAccessToken } from "app/brick/types"
import axios from "axios"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * to easily generate realistic data.
 */
const seed = async () => {
  // const resAccessToken = await axios.get(brickApi.getPublicAccessToken(), {
  //   auth: {
  //     username: brickApi.getClientId(),
  //     password: brickApi.getClientSecret(),
  //   },
  // })

  // const {
  //   data: { access_token },
  // } = resAccessToken.data as GetPublicAccessToken

  // const resInstutions = await axios.get(brickApi.getListInstutions(), {
  //   headers: {
  //     Authorization: `Bearer ${access_token}`,
  //   },
  // })
  // const { data } = resInstutions.data
  // const institutions = data.map(
  //   ({
  //     country_code,
  //     country_name,
  //     bank_code,
  //     primary_color,
  //     automatic_verification,
  //     pdf_verification,
  //     passbook_verification,
  //     institution_type,
  //     ...res
  //   }) => ({
  //     ...res,
  //     countryCode: country_code,
  //     countryName: country_name,
  //     bankCode: bank_code,
  //     primaryColor: primary_color,
  //     automaticVerification: automatic_verification,
  //     pdfVerification: pdf_verification,
  //     passbookVerification: passbook_verification,
  //   })
  // )

  // await db.institution.createMany({
  //   data: institutions.map((institution) => ({
  //     ...institution,
  //   })),
  // })

  const now = new Date()
  const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  const oneYearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000)

  for (let i = 0; i < 100; i++) {
    let useDate = oneDayAgo
    if (i % 4 === 0) useDate = oneWeekAgo
    if (i % 4 === 1) useDate = oneMonthAgo
    if (i % 4 === 2) useDate = oneYearAgo

    const type = Math.floor(Math.random() * 3) === 1 ? "IN" : "OUT"

    await db.transaction.create({
      data: {
        createdAt: useDate,
        amount: Math.floor(Math.random() * 100000),
        type,
        walletId: "43845bfe-982a-4047-90a0-8daa3bbf9693",
      },
    })
  }

  for (let i = 0; i < 100; i++) {
    let useDate = oneDayAgo
    if (i % 4 === 0) useDate = oneWeekAgo
    if (i % 4 === 1) useDate = oneMonthAgo
    if (i % 4 === 2) useDate = oneYearAgo

    const type = Math.floor(Math.random() * 3) === 1 ? "IN" : "OUT"

    await db.transaction.create({
      data: {
        createdAt: useDate,
        amount: Math.floor(Math.random() * 100000),
        type,
        walletId: "3ac16d25-d667-4939-b14d-d1b794b946e4",
      },
    })
  }
}

export default seed
