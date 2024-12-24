"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {useState} from "react";
import style from "@/styles/moblienav.module.css"
import Link from "next/link";
import {usePathname} from "next/navigation";
import Drawer from '@mui/material/Drawer';
import Mobilecanvas from "./mobilecanvas";

export default function Mobilenav() {
    const [value, setValue] = useState(0);
    const [open, setOpen] = React.useState(false);
    const path = usePathname();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={style.BottomNav}>
            <Box sx={{width: 360}}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="메인" icon={<HomeRoundedIcon/>} component={Link} href="/" passHref/>
                    <BottomNavigationAction label="내 정보" icon={<AccountCircleOutlinedIcon/>} component={Link}
                                            href="/info" passHref/>
                    <BottomNavigationAction label="더보기" icon={<MoreHorizOutlinedIcon/>} onClick={handleDrawerOpen}/>
                </BottomNavigation>
            </Box>
            <Mobilecanvas open={open} handleDrawerClose={handleDrawerClose}/>
        </div>
    );
}