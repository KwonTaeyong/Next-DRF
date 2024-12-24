"use client"

import {useRouter} from "next/navigation";
import style from "@/styles/notice/notice-card.module.css";
import React from "react";
import NoticeBottom from "./notice-bottom";

export default function NoticeCard({id, title, hostOrg, sourceOrg, scrapDt, views, sourceUrl, is_in_cart}) {
    const router = useRouter();

    const onClick = () => {
        router.push(`notice/${id}?is_in_cart=${is_in_cart}`);
    };

    return (

        <div>
            <div className={style.Card} key={id} onClick={onClick}>
                <div>
                    <h4 className={style.CardTitle}>{title}</h4>
                    <p>소관부처·지자체 : {hostOrg}</p>
                    <p>사업수행기관 : {sourceOrg}</p>
                    <p>신청기간 : {scrapDt} </p>
                </div>
                <NoticeBottom views={views} id={id} sourceUrl={sourceUrl} is_in_cart={is_in_cart}/>
            </div>
        </div>
    );
}