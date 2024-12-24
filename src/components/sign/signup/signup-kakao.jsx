
import style from "@/styles/sign/singup-kakao.module.css"
import {SiKakaotalk} from "react-icons/si";
import React from "react";


export default function SignupKakao() {
    return (
        <button className={style.KakaoButton}><SiKakaotalk size={20}/>카카오톡 시작하기</button>
    )
}