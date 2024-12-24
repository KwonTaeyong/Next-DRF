"use client"

import style from "@/styles/sign/signup.module.css"
import SignupForm from "@/components/sign/signup/signup-form";
import React, { useState } from "react";
import SignupKakao from "@/components/sign/signup/signup-kakao";
import SignupNaver from "@/components/sign/signup/signup-naver";
import AlertBox from "@/components/alert";

export default function SignUp() {
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleAlertClose = () => {
        setIsAlertOpen(false);
    };

    const handleSignupSuccess = () => {
        setIsAlertOpen(true);
        setAlertMessage("회원가입이 완료되었습니다.");
    };

    const handleSignupFailure = (message) => {
        setIsAlertOpen(true);
        setAlertMessage(message || "회원가입이 실패했습니다.");
    };

    return (
        <div>
            <h2 className={style.MainText}>회원가입</h2>
            <h2 className={style.SubText}>정부지원사업 공고 알리미, <span className={style.LogoText}>8125</span></h2>
            <div className={style.UserContainer}>
                <SignupForm onSignupSuccess={handleSignupSuccess} onSignupFailure={handleSignupFailure} setIsAlertOpen={setIsAlertOpen} setAlertMessage={setAlertMessage} />
            </div>
            <div className={style.ButtonContainer}>
                <SignupKakao />
                <SignupNaver />
            </div>
            <AlertBox isOpen={isAlertOpen} message={alertMessage} handleAlertClose={handleAlertClose} />
        </div>
    )
}