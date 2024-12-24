"use client"

import style from "@/styles/popup.module.css"
import React, {useEffect, useState} from "react";

export default function Popup({imageUrl, id}) {
    const [hideToday, setHideToday] = useState(false);
    const [showPopup, setShowPopup] = useState(true); // 팝업 표시 여부 상태 추가

    useEffect(() => {
        const isHiddenToday = localStorage.getItem("popupHiddenToday" + id);
        if (isHiddenToday) {
            setShowPopup(false);
        }
    }, []);

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    const handleHideTodayChange = () => {
        setHideToday((prev) => !prev);
        localStorage.setItem("popupHiddenToday" + id, true);
        setShowPopup(false);
    };


    return (
        showPopup && (
            <div className={style.PopupContainer}>
                <div className={style.PopupContent}>
                    <img src={imageUrl} style={{width: "100%"}} alt="popup"/>
                    <div className={style.CheckboxContainer}>
                        <button onClick={handlePopupClose}>닫기</button>
                        <input type="checkbox"
                               checked={hideToday}
                               onChange={handleHideTodayChange}
                        />오늘 하루 보지 않기
                    </div>
                </div>
            </div>
        )
    );
};