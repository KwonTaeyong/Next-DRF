import style from "@/styles/mobileheader.module.css"
import Link from "next/link";
import React from "react";

export default function Mobileheader() {
    return (
        <div className={style.TopNav}>
            <Link href="/">
                <span>
                <img src="/img/logo2.png" alt="로고"/>
                    </span>
            </Link>
        </div>
    )
}