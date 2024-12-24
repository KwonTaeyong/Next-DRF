"use client"

import {FaSearch} from "react-icons/fa";
import style from "@/styles/notice/notice-search.module.css"
import {useRouter} from "next/navigation";
import {useState} from "react";

export default function NoticeSearch(props) {
    const router = useRouter();
    const [type, setType] = useState(props.type)
    const [keyword, setKey] = useState(props.keyword);

    const handleClick = () => {
        router.push(`/notice?searchType=${type}&searchKeyword=${keyword}`)
    };

    return (
        <div className={style.container}>
            <div className={style.inputContainer}>
                <input
                    className={style.inputContent}
                    type="text"
                    placeholder="검색어를 입력하세요"
                    value={keyword}
                    onChange={(e) => setKey(e.target.value)}
                />
                <button onClick={handleClick} className={style.searchBtn}>
                    <FaSearch/>
                </button>
            </div>
        </div>
    );
}