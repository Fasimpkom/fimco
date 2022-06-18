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
  const resAccessToken = await axios.get(brickApi.getPublicAccessToken(), {
    auth: {
      username: brickApi.getClientId(),
      password: brickApi.getClientSecret(),
    },
  })

  const {
    data: { access_token },
  } = resAccessToken.data as GetPublicAccessToken

  const resInstutions = await axios.get(brickApi.getListInstutions(), {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
  const { data } = resInstutions.data
  const institutions = data.map(
    ({
      country_code,
      country_name,
      bank_code,
      primary_color,
      automatic_verification,
      pdf_verification,
      passbook_verification,
      institution_type,
      ...res
    }) => ({
      ...res,
      countryCode: country_code,
      countryName: country_name,
      bankCode: bank_code,
      primaryColor: primary_color,
      automaticVerification: automatic_verification,
      pdfVerification: pdf_verification,
      passbookVerification: passbook_verification,
    })
  )

  console.log(institutions)
  await db.institution.createMany({
    data: institutions.map((institution) => ({
      ...institution,
    })),
  })
}

export default seed
