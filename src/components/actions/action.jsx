'use server'

import {cookies} from "next/headers"
import {tokenExist, Logout} from '@/components/actions/user'
export async function beReq(uri, method, data) {
    // const base_url = process.env.NEXT_PUBLIC_BE_URL
    const base_url = "http://api.nowonlab.com"
    // const base_url = "http://127.0.0.1:8000"

    const headers = {
        "Content-Type": "application/json",
    }

    const auth = await get_auth(base_url, headers)
    if (auth) {
        headers["Authorization"] = "Bearer " + auth
    }


    const url = base_url + uri;

    // Request options
    const options = {
        method: method,
        headers: headers,
        credentials: 'include',
    };

    // 'GET' 메서드가 아닌 경우, body 추가
    if (method === 'POST') {
        options.body = JSON.stringify(data);
    }

    // fetch 요청 실행
    return fetch(url, options);
}

async function get_auth(base_url, headers) {
    if (cookies().has("refresh_token")) {
        const refreshToken = cookies().get("refresh_token").value
        const data = {"refresh": refreshToken}

        const response = await fetch(base_url + '/common/tokenRefresh/', {
            method: 'POST',
            headers: headers,
            credentials: 'include',
            body: JSON.stringify(data)
        })

        const responseData = await response.json();
        return responseData['access']
    }
    return 0
}