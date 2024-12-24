"use client"

import {Box, Modal, Popover} from "@mui/material";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import LoginModal from "@/components/sign/loginmodal";
import style from "@/styles/tooltip.module.css";
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';
import {Logout} from '@/components/actions/user'

export default function ToolTip({anchorEl, open, handleCloseTooltip, path, auth}) {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const handleLoginModalOpen = () => {
        setIsLoginModalOpen(true);
    };

    const handleLoginModalClose = () => {
        setIsLoginModalOpen(false);
    };

    const handleLogout = async () => {
        await Logout();
        window.location.reload();
    };

    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleCloseTooltip}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "center"
            }}
        >
            <div className={style.TooltipContainer}>
                {auth && (
                    <Link href="/info" style={{color: path === "/info" ? "#319795" : "inherit"}}>
                        <PersonSharpIcon/><span>마이페이지</span>
                    </Link>
                )}
                {auth && (
                    <Link href="/interest" style={{color: path === "/interest" ? "#319795" : "inherit"}}>
                        <NotificationsActiveSharpIcon/><span>나의 공고</span>
                    </Link>
                )}
                {!auth && (
                    <Link href="/signup" style={{color: path === "/signup" ? "#319795" : "inherit"}}>
                        <PersonAddAltSharpIcon/><span>회원가입</span>
                    </Link>
                )}
                {!auth && (
                    <a type="button" onClick={handleLoginModalOpen}>
                        <LoginSharpIcon/><span>로그인</span>
                    </a>
                )}
                {auth && (
                    <a type="button" onClick={handleLogout}>
                        <LogoutSharpIcon/><span>로그아웃</span>
                    </a>
                )}
            </div>
            <Modal open={isLoginModalOpen} onClose={handleLoginModalClose}>
                <Box>
                    <LoginModal closeModal={handleLoginModalClose} closeTooltip={handleCloseTooltip}/>
                </Box>
            </Modal>
        </Popover>

    )
}