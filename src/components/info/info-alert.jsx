"use client"
import style from "@/styles/info/info-alert.module.css"
import {IconButton, Modal, Box} from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {SiKakaotalk} from 'react-icons/si';
import React, {useState} from "react";
import InfoKakao from "./info-kakao";
import InfoEmail from "./info-email";

export default function InfoAlert() {
    const [isKakaoOpen, setIsKakaoOpen] = useState(false);
    const [isEmailOpen, setIsEamilOpen] = useState(false);

    const handleKakaoOpen = () => {
        setIsKakaoOpen(true);
    };
    const handleKakaoClose = () => {
        setIsKakaoOpen(false);
    };

    const handleEmailOpen = () => {
        setIsEamilOpen(true);
    };

    const handleEmailClose = () => {
        setIsEamilOpen(false);
    };


    return (
        <div className={style.ButtonContainer}>
            <IconButton onClick={handleEmailOpen} aria-label="favorite">
                <MailOutlineIcon/> <label>이메일 알림</label>
            </IconButton>

            <IconButton onClick={handleKakaoOpen} aria-label="visibility">
                <SiKakaotalk size={24}/> <label>카카오톡 알림설정</label>
            </IconButton>

            <Modal open={isKakaoOpen} onClose={handleKakaoOpen}>
                <Box>
                    <InfoKakao closeModal={handleKakaoClose}/>
                </Box>
            </Modal>

            <Modal open={isEmailOpen} onclose={handleEmailClose}>
                <Box>
                    <InfoEmail closeModal={handleEmailClose}/>
                </Box>
            </Modal>
        </div>

    )
}



