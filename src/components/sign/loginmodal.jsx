/// 로그인 모달 컴포넌트

import React from "react";
import style from "@/styles/sign/loginmodal.module.css";
import NaverButton from "./login/naverbutton";
import KakaoButton from "./login/kakaobutton";
import Loginform from "./login/loginform";

export default function LoginModal({ closeModal }) {

    return (
        <div className={style.ModalContainer}>
            <h2>8125</h2>
            <span>정부지원사업 공고 알리미</span>
            <br />
            <br />
            <Loginform closeModal={closeModal} />
            <KakaoButton />
            <NaverButton />
            <a className={style.closeButton} onClick={closeModal}>
                X
            </a>
        </div>
    );
}