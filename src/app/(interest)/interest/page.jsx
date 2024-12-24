/// 관심 공고 페이지
"use client"

import style from "@/styles/interest/interest.module.css"
import {useState} from 'react';
import {Tab, Tabs} from '@mui/material';
import InterestSave from '@/components/interest/interest-save';
import InterestRecent from '@/components/interest/interest-recent';
import InterestSend from '@/components/interest/interest-send';

export default function Interest() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);

    };

    return (
        <div className={style.MainContainer}>
            <h2 className={style.MainText}>유저님 반갑습니다.</h2>
            <div className={style.TabContainer}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    aria-label="Interest tabs"
                    sx={{
                        '& .MuiTabs-flexContainer': {
                            justifyContent: 'space-between', // 탭들을 좌우로 분산 배치
                        },
                    }}
                >
                    <Tab
                        label="찜한 사업"
                        sx={{
                            fontWeight: 700, // 폰트 굵기 설정
                            width: '30%', // 너비 설정
                        }}
                    />
                    <Tab
                        label="최근본 사업"
                        sx={{
                            fontWeight: 700, // 폰트 굵기 설정
                            width: '30%', // 너비 설정
                        }}
                    />
                    <Tab
                        label="지원한 사업"
                        sx={{
                            fontWeight: 700, // 폰트 굵기 설정
                            width: '30%', // 너비 설정
                        }}
                    />
                </Tabs>
                <div className={style.TabContent}>
                    {activeTab === 0 && <InterestSave/>}
                    {activeTab === 1 && <InterestRecent/>}
                    {activeTab === 2 && <InterestSend/>}
                </div>
            </div>
        </div>
    );
}