'use server'

import {beReq} from "./action"

export async function getSaves() {
    const response = await beReq(
        `/gongo/cartlist/`,
        'GET'
    )
    return await response.json()
}
