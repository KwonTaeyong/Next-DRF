'use client'
import React, {useEffect, useState} from "react";
import {Backdrop, Box, Modal} from "@mui/material";
import style from "@/styles/alert.module.css"

export default function AlertBox({message, isOpen, handleAlertClose}) {


    const handleClose = (event) => {
        event.stopPropagation();
        handleAlertClose()
    }
    return (
        <Modal open={isOpen}
               onClose={handleClose}
               BackdropComponent={Backdrop}
               BackdropProps={{style: {backgroundColor: "transparent"}}}
        >
            <Box>
                <div className={style.ModalContainer}>
                    <a className={style.closeButton} onClick={handleClose}>
                        X
                    </a>
                    <h3 className={style.title}>정부지원사업 공고 알리미, 8125</h3>
                    <div className={style.text}>{message}</div>
                </div>
            </Box>
        </Modal>
    );
}