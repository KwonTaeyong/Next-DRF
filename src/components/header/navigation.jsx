"use client"

import React, {useEffect, useState} from "react";
import style from "@/styles/navigation.module.css";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {IconButton} from "@mui/material";
import {usePathname} from "next/navigation";
import ToolTip from "./tooltip";
import {Info, tokenExist} from '@/components/actions/user'
import AlertBox from "@/components/alert";

export default function Navigation() {
    const path = usePathname();
    const [anchorEl, setAnchorEl] = useState(null);
    const [auth, setAuth] = useState(false)
    const [userId, setUserId] = useState("")
    const [isOpne, setIsOpne] = useState(false)

    useEffect(() => {
        checkLogin()
    }, []);


    const handleIconClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseTooltip = () => {
        setAnchorEl(null);
    };

    const checkLogin = async () => {
        const isLoggedIn = await tokenExist();
        if (isLoggedIn && !auth) {
            const userInfo = await Info()
            setUserId(userInfo.email)
            setIsOpne(true)
        }
        setAuth(isLoggedIn)
    }

    const open = Boolean(anchorEl);

    const handleAlertClose = () => {
        setIsOpne(false)
    }


    return (
        <nav className={style.nav}>
            <Link href="/">
                <img src="/img/logo2.png" alt="로고"/>
            </Link>
            <Link href="/" style={{color: path === "/" ? "#319795" : "inherit"}}>
                메인
            </Link>
            <Link href="/notice" style={{color: path === "/notice" ? "#319795" : "inherit"}}>
                공고
            </Link>
            <Link href="/board" style={{color: path === "/board" ? "#319795" : "inherit"}}>
                게시판
            </Link>

            <IconButton color="inherit" onClick={handleIconClick}>
                <AccountCircleIcon style={{color: "#4A4A4A"}}/>
            </IconButton>
            <ToolTip anchorEl={anchorEl} open={open} handleCloseTooltip={handleCloseTooltip} path={path} auth={auth}/>
            <AlertBox isOpen={isOpne} message={`${userId}님 환영합니다.`} handleAlertClose={handleAlertClose}/>
        </nav>
    );
}