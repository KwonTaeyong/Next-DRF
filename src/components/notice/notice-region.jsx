/// 공고 지역별 버튼 컴포넌트

"use client"

import style from "@/styles/notice/notice-region.module.css"
import {useRouter} from "next/navigation";
import {useState} from "react";

export default function NoticeRegion(props) {
    const regions = ['창원', '서울', '부산', '대구', '강원', '인천', '경남', '경북', '제주', '강원', '광주', '대전', '전남', '전북', '세종', '충북', '충남'];
    const router = useRouter();

    const handleClick = async (region) => {
        router.push(`/notice/?keyword=${region}`)

    };

    return (
        <div className={style.GroupContainer}>
            {regions.map((region, index) => (
                <button onClick={() => handleClick(region)} key={index}>
                    {region}
                </button>
            ))}
        </div>
    )
}