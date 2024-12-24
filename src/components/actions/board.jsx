'use server'
import {beReq} from "./action"

export async function getBoard(keyword) {
    const response = await beReq(
        `/bbs/list/${keyword}`,
        'Get'
    )

    return await response.json()
}