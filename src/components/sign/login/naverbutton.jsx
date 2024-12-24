/// 네이버 로그인 버튼 컴포넌트

import style from "@/styles/sign/loginmodal.module.css"
import {SiNaver} from 'react-icons/si';
import React from "react";

export default function NaverButton() {

    const handleNaverLogin = () => {
        const clientId = 'b9aWx_Bv9IB_Zb2GrGko';
        const redirectUri = 'http://localhost:3000/';
        const state = "RANDOM_STRING"
        const NaverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;
        window.location.href = NaverURL;
    };

    return (
        <button onClick={handleNaverLogin} className={style.NaverButton}><SiNaver size={24}/>네이버 시작하기</button>
    )
}