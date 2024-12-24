import style from "@/styles/sign/signup.module.css";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import {Login} from '@/components/actions/user'
import React from "react";

export default function Loginform({closeModal}) {
    const handleSignupClick = () => {
        closeModal(); // 회원가입 버튼 클릭 시 모달 닫기
    };

    const handleLoginpost = async (data) => {
        const formdata = {
            email: data.get("email"),
            password: data.get("password")
        };
        const response = await Login(formdata)

        if (response['email']) {
            console.log("로그인 성공");
            window.location.reload();

        } else {
            console.error("로그인 실패:", response.message);
            alert("로그인 실패");
        }
    };

    return (
        <div>
            <form className={style.formContainer}>
                <TextField
                    label="이메일"
                    variant="outlined"
                    name="email"
                    fullWidth
                    value="nowon@nowonlab.com"
                    sx={{
                        marginBottom: "20px"
                    }}
                />
                <TextField
                    label="비밀번호"
                    variant="outlined"
                    type="password"
                    name="password"
                    fullWidth
                    value="1211"
                    sx={{
                        marginBottom: "20px"
                    }}
                />
                <button formAction={handleLoginpost} className={style.Submitbutton}>
                    로그인
                </button>

                <Link href="/signup">
                    <button onClick={handleSignupClick} className={style.Signbutton}>
                        회원가입
                    </button>
                </Link>
            </form>
        </div>
    );
}