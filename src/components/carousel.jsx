"use client"

import style from "@/styles/carousel.module.css"
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MyCarousel() {
    return (
        <div className={style.StyledCarousel}>
            <Carousel showArrows={true} infiniteLoop={true} showStatus={false}
                      interval={5000} showThumbs={false} autoPlay={true}>
                <div>
                    <img src="https://api.exitobiz.co.kr/img/banner/20235941136811.png" alt="carousel-1"/>
                </div>
                <div>
                    <img src="https://api.exitobiz.co.kr/img/banner/20233256549949.png" alt="carousel-2"/>
                </div>
                <div>
                    <img src="https://api.exitobiz.co.kr/img/banner/2023653504860.png" alt="carousel-3"/>
                </div>
            </Carousel>
        </div>
    )
}