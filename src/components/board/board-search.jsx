/// 게시판 검색 컴포넌트

"use client"

import { FaSearch } from "react-icons/fa";
import style from "@/styles/notice/notice-search.module.css"
import {useRouter} from "next/navigation";
import {useState} from "react";


export default function BoardSearch(props) {
    const router = useRouter();
    const [keyword, setKeyword] = useState("");

    const handleClick = () => {
        router.push(`/board/?keyword=${keyword}`)

    };

    return (
        <div className={style.container}>
            <div className={style.inputContainer}>
                <input
                    className={style.inputContent}
                    type="text"
                    placeholder="검색어를 입력하세요"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button onClick={handleClick} className={style.searchBtn}>
                    <FaSearch />
                </button>
            </div>
        </div>
    );
}