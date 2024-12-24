"use client"

import style from "@/styles/scrolltop.module.css"
import React, {useState, useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

export default function Scrolltop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // 페이지를 스크롤할 때마다 isVisible 상태 업데이트
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div>
            {isVisible && (
                <div onClick={scrollToTop} className={style.scrolltop}>
                    <FaArrowCircleUp sx={{fontSize: 39}}/>
                </div>
            )}
        </div>
    )
}