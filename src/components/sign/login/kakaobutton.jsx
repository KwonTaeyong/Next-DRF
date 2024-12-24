/// 카카오 로그인 버튼 컴포넌트

import style from "@/styles/sign/loginmodal.module.css"
import {SiKakaotalk} from 'react-icons/si';
import React from "react";

export default function KakaoButton() {
    const handleKakaoLogin = () => {
        const clientId = '7cd9570471e83919764b37665bc8d266';
        const redirectUri = 'http://localhost:3000/';
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
        window.location.href = kakaoURL;
    };


    return (
        <button onClick={handleKakaoLogin} className={style.KakaoButton}><SiKakaotalk size={24}/>카카오톡 시작하기</button>

    )
}