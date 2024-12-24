import React from 'react';
import style from "@/styles/common/error-data.module.css"
import { MdError } from "react-icons/md";

function ErrorData(props) {
    const {text} = props;

    return (
        <div className={style.Wapper}>
            <div className={style.Icon}><MdError/></div>
            <div className={style.Text}>{text}</div>
        </div>
    );
}

export default ErrorData;