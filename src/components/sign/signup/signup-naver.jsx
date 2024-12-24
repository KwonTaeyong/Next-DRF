
import style from "@/styles/sign/signup-naver.module.css"
import {SiNaver} from "react-icons/si";
import React from "react";


export default function SignupNaver() {
    return (
        <button className={style.NaverButton}><SiNaver size={20}/>네이버 시작하기</button>
    )
}