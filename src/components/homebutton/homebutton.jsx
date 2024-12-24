/// 메인페이지 이벤트 버튼 컴포넌트
"use client"

import style from "@/styles/home/homebutton.module.css"
import Noticebutton from "./noticebutton/noticebutton";
import Mailbutton from "./mailbutton/mailbutton";
import Smsbutton from "./smsbutton/smsbutton";
import Consultingbutton from "./consultingbutton/consultingbutton";
import AlertBox from "@/components/alert";
import React, { useState } from "react";

export default function Homebutton() {
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleAlertClose = () => {
        setIsAlertOpen(false);
    }

    return (
        <div>
            <ul className={style.homebutton}>
                <Noticebutton setAlertMessage={setAlertMessage} setIsAlertOpen={setIsAlertOpen} />
                <Mailbutton setAlertMessage={setAlertMessage} setIsAlertOpen={setIsAlertOpen} />
                <Smsbutton setAlertMessage={setAlertMessage} setIsAlertOpen={setIsAlertOpen} />
                <Consultingbutton setAlertMessage={setAlertMessage} setIsAlertOpen={setIsAlertOpen} />
            </ul>
            <AlertBox isOpen={isAlertOpen} message={alertMessage} handleAlertClose={handleAlertClose} />
        </div>
    )
}