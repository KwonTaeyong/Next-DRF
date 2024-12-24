import style from "@/styles/info/info-modal.module.css"
import {FormControlLabel, Switch} from "@mui/material";
import React from "react";

export default function InfoEmail({ closeModal }) {


    return (
        <div className={style.ModalContainer}>
            <a className={style.closeButton} onClick={closeModal}>
                X
            </a>
            <h2 className={style.MainText}>이메일 알림 설정</h2>
            <div className={style.SwitchContainer}>
                <p>지원사업 안내 알림 <FormControlLabel control={<Switch/>}/></p>
                <p>지원사업 키워드 알림 <FormControlLabel control={<Switch/>}/></p>
                <p>찜한 지원사업 마감임박 알림 <FormControlLabel control={<Switch/>}/></p>
                <p>커뮤니티 컨텐츠 댓글 알림 <FormControlLabel control={<Switch/>}/></p>
                <p>커뮤니티 댓글 좋아요 알림 <FormControlLabel control={<Switch/>}/></p>
            </div>
            <button type="submit">
                저장하기
            </button>
        </div>
    )
}


