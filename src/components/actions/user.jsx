'use server'
import {cookies} from "next/headers"
import {beReq} from "./action"
import nodemailer from "nodemailer"


export async function Login(formdata) {
    const response = await beReq(
        `/common/emailLogin/`,
        'POST',
        formdata
    )

    const responseData = await response.json();

    const refresh_token = responseData['refresh_token']
    const refresh_expires = responseData['refresh_expires']

    cookies().set({
        name: "refresh_token",
        value: refresh_token,
        httpOnly: true,
        expires: Date.now() + refresh_expires
    })

    return responseData["user_info"]
}

export async function Logout() {
    cookies().delete("refresh_token")
}



export async function Info(searchType, searchKeyword) {
    const response = await beReq(
        `/common/userInfo/`,
        'GET'
    )
    //
    if (!response.ok) {
        return new Error("데이터를 불러오지 못하였습니다.")
    }

    return await response.json()
}


export async function tokenExist() {
    return cookies().has("refresh_token");
}

export async function sendEmail(email, code) {
    try {
        // 이메일을 보낼 SMTP 서버 설정
        let transporter = nodemailer.createTransport({
            host: 'smtp.kakao.com',
            port: 465,
            secure: true,
            auth: {
                user: 'kty97@kakao.com',
                pass: 'fnehfvm159!'
            }
        });

        // 이메일 옵션 설정
        let mailOptions = {
            from: email,
            to: email,
            subject: '8125, 회원가입 인증 코드',
            text: `회원가입 인증 코드: ${code}`
        };

        // 이메일 보내기
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ', info.response);
    } catch (error) {
        console.error('Email sending failed: ', error);
    }
}