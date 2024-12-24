'use server'
import {beReq} from "./action"
import {notFound} from "next/navigation";

export async function getNotice(searchType, searchKeyword) {
    const response = await beReq(
        `/gongo/list?${searchType}=${searchKeyword}`,
        'GET'
    )
    if (!response.ok) {
        return new Error("데이터를 불러오지 못하였습니다.")
    }
    return await response.json()
}

export async function getNoticeDetail(gongoId) {
    const response = await beReq(
        `/gongo/detail/${gongoId}`,
        'GET'
    )
    if (!response.ok) {
        return notFound();
    }
    return await response.json()
}

export async function addCart(gongoId) {
    const data = {
        "gongo": gongoId
    }

    const response = await beReq(
        `/gongo/addtocart/`,
        'POST',
        data
    )
    return await response.status
}