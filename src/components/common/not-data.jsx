import React from 'react';
import style from "@/styles/common/not-data.module.css"
import { TbDatabaseX } from "react-icons/tb";
function NotData(props) {
    
    const {text} = props;

    return (
        <div className={style.Wapper}>
            <div className={style.Icon}><TbDatabaseX/></div>
            <div className={style.Text}>{text}</div>
        </div>
    );
}

export default NotData;