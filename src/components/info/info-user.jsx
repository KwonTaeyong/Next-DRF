"use client"

import style from "@/styles/info/info-user.module.css";
import TextField from "@mui/material/TextField";
import {useState} from "react";

export default function InfoUser() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [nickName, setNickName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div className={style.UserContainer}>
            <h2 className={style.MainText}>회원정보</h2>
            <form onSubmit={handleSubmit} className={style.formContainer}>
                <TextField
                    label="이름"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    sx = {{
                        marginBottom: "20px"
                    }}
                />
                <TextField
                    label="닉네임"
                    variant="outlined"
                    value={nickName}
                    onChange={(e) => setNickName(e.target.value)}
                    fullWidth
                    sx = {{
                        marginBottom: "20px"
                    }}
                />
                <TextField
                    label="전화번호"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    fullWidth
                    sx = {{
                        marginBottom: "20px"
                    }}
                />
                <TextField
                    label="이메일"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    sx = {{
                        marginBottom: "20px"
                    }}
                />
                <button type="submit">
                    회원정보 저장하기
                </button>
            </form>
        </div>
    )
}