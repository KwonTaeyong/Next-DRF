/// 핫한 공고 카드 컴포넌트

"use client";

import style from "@/styles/notice/notice-rank.module.css";
import {useRouter} from "next/navigation";


export default function NoticeItem({id, title, sourceOrg, index}) {
    const router = useRouter();

    const onClick = () => {
        router.push(`/notice/${id}`)
    }

    return (
        <div className={style.Company} onClick={onClick} key={id}>
            <h3>{index}</h3>
            <h3>{title}</h3>
            <h4>{sourceOrg}</h4>
        </div>
    );
}