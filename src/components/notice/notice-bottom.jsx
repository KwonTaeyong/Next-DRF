import style from "@/styles/notice/notice-card.module.css";
import {IconButton} from "@mui/material";
import {FavoriteBorderOutlined, FavoriteOutlined, ShareOutlined, VisibilityOutlined} from "@mui/icons-material";
import Cookies from 'js-cookie';
import React, {useState} from "react";
import {addCart} from "@/components/actions/notice";
import {useRouter} from "next/navigation";
import AlertBox from "@/components/alert";

export default function NoticeBottom({id, views, sourceUrl, is_in_cart}) {
    const router = useRouter();
    const [isOpne, setIsOpne] = useState(false)


    const handleAddCart = async () => {
        const cartStatus = await addCart(id);
        if (cartStatus === 200) {
            setCart(false)
        } else if (cartStatus === 201) {
            setCart(true)
        } else {
            setIsOpne(true)
            return false
        }
    }

    const handleAlertClose = () => {
        setIsOpne(false)
    }

    const [cart, setCart] = useState(is_in_cart)
    return (

        <div className={style.ButtonContainer}>
            <IconButton aria-label="favorite" onClick={(event) => {
                event.stopPropagation();
                handleAddCart();
            }}>
                {cart ? (
                    <FavoriteOutlined style={{color: '#F7418F'}}/>
                ) : (
                    <FavoriteBorderOutlined/>
                )}
                <label>찜</label>
            </IconButton>
            <IconButton aria-label="share" onClick={(event) => {
                event.stopPropagation();
                window.open(sourceUrl, '_blank');
            }}>
                <ShareOutlined/>
            </IconButton>
            <IconButton aria-label="visibility" onClick={(event) => {
                event.stopPropagation();
            }}>
                <VisibilityOutlined/> <label>{views}</label>
            </IconButton>
            <AlertBox isOpen={isOpne} message={`로그인이 필요합니다.`} handleAlertClose={handleAlertClose}/>
        </div>
    );
}