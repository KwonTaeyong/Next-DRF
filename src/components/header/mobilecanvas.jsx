import Drawer from "@mui/material/Drawer";
import * as React from "react";
import style from "@/styles/mobilecanvas.module.css"
import Link from "next/link";

import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import EventNoteSharpIcon from '@mui/icons-material/EventNoteSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';

export default function Mobilecanvas({open, handleDrawerClose}) {
    return (
        <div>
            <Drawer
                anchor="bottom"
                open={open}
                onClose={handleDrawerClose}
            >
                <div className={style.CanvasContainer}>

                    <div className={style.IconContainer}>
                        <Link href={"/notice"} onClick={handleDrawerClose}>
                            <button><EventNoteSharpIcon style={{fontSize: 30}}/>
                            </button>
                            <span>공고</span>
                        </Link>
                    </div>

                    <div className={style.IconContainer}>
                        <Link href={"/board"} onClick={handleDrawerClose}>
                            <button><NoteAltOutlinedIcon style={{fontSize: 30}}/></button>
                            <span>게시판</span>
                        </Link>
                    </div>

                    <div className={style.IconContainer}>
                        <Link href={"/interest"} onClick={handleDrawerClose}>
                            <button><PersonSharpIcon style={{fontSize: 30}}/></button>
                            <span>내 정보</span>
                        </Link>
                    </div>

                    <div className={style.IconContainer}>
                        <Link href={"/info"} onClick={handleDrawerClose}>
                            <button><SettingsSharpIcon style={{fontSize: 30}}/></button>
                            <span>설정</span>
                        </Link>
                    </div>


                </div>
            </Drawer>
        </div>
    )
}