/// 핫한 공고 컴포넌트

import React from "react";
import NoticeItem from "./notice-item";
import style from "@/styles/notice/notice-rank.module.css";
import {getNotice} from "@/components/actions/notice";


export default async function NoticeRank() {

    const ranks = await getNotice();
    const sortedRanks = ranks.sort((a, b) => b.views - a.views);
    const top5Ranks = sortedRanks.slice(0, 5);

    console.log(top5Ranks);


    return (
        <div className={style.CompanyList}>
            {top5Ranks.map((rank, index) => (
                <NoticeItem key={rank.id}
                            id={rank.id}
                            index={index + 1}
                            title={rank.title}
                            sourceOrg={rank.sourceOrg}
                />
            ))}
        </div>
    );
}
