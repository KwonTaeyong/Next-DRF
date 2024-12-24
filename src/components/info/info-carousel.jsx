"use client"
import {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import style from "@/styles/info/info-user.module.css"
import InfoUser from "./info-user";
import InfoCompany from "./info-company";

const CustomPrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, backgroundColor: "white", color: "#319795"}}
            onClick={onClick}
        >
            <ArrowBackIosIcon/>
        </div>
    );
};

const CustomNextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, backgroundColor: "white", color: "#319795"}}
            onClick={onClick}
        >
            <ArrowForwardIosIcon/>
        </div>
    );
};

export default function InfoCarousel() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const settings = {
        infinite: true,
        draggable: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow/>,
        nextArrow: <CustomNextArrow/>,
        afterChange: (index) => setSelectedIndex(index)
    };

    return (
        <Slider className={style.Shadow} {...settings}>
                <div>
                    <InfoUser/>
                </div>
                <div>
                    <InfoCompany/>
                </div>

        </Slider>
    );
}