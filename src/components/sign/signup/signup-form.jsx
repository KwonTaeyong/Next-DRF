import style from "@/styles/sign/signup.module.css";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import SignupCheck from "./signup-check";

export default function SignupForm({onSignupSuccess, onSignupFailure, setIsAlertOpen, setAlertMessage}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isSuccess, setIsSuccess] = useState(false); // isSuccess 상태 추가

    const handleSignUppost = async () => {
        if (password !== password2) { // 비밀번호가 일치하지 않을 때
            setIsSuccess(false);
            onSignupFailure('비밀번호가 일치하지 않습니다.');
        } else {
            setIsSuccess(true);
            try {
                // 회원가입 요청
                if (isSuccess) {
                    const response = await fetch("http://api.nowonlab.com/common/emailSignup/", {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password,
                            password2: password2,
                        }),
                    });
                    if (response.ok) {
                        const data = await response.json();
                        onSignupSuccess(); // 회원가입 성공 시 콜백 호출
                        setEmail('');
                        setPassword('');
                        setPassword2('');
                    } else {
                        response.json().then(data => {
                            onSignupFailure(data.email); // 에러 메시지 전달
                        });
                    }
                } else {
                    onSignupFailure('인증을 완료해주세요.');
                }
            } catch (error) {
                onSignupFailure(error); // 에러 메시지 전달
            }
        }
    };

    return (
        <div>
            <div className={style.formContainer}>
                <SignupCheck setEmailState={setEmail} setIsSuccessProp={setIsSuccess} setIsAlertOpen={setIsAlertOpen}
                             setAlertMessage={setAlertMessage}/> {/* setIsSuccessProp을 props로 전달 */}
                <TextField
                    label="비밀번호"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    sx={{
                        marginBottom: "20px"
                    }}
                />
                <TextField
                    label="비밀번호 확인"
                    variant="outlined"
                    type="password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    fullWidth
                    sx={{
                        marginBottom: "20px"
                    }}
                />
                <button className={style.Submitbutton} onClick={handleSignUppost}>
                    회원가입
                </button>
            </div>
        </div>
    );
}