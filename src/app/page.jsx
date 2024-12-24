import NoticeRank from "@/components/notice/notice-rank";
import MyCarousel from "@/components/carousel"
import Homebutton from "@/components/homebutton/homebutton";
import Banner from "@/components/banner";
import AlertBox from "@/components/alert"
import React from "react";
import {Box, Modal, Backdrop} from "@mui/material";


export default function MainPage() {
    return (
        <div>
            <div>
                <Banner/>
                <MyCarousel/>
                <Homebutton/>
                <NoticeRank/>
            </div>
        </div>
    )
}