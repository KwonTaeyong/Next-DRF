import style from "@/styles/sign/signup-check.module.css";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { sendEmail } from "@/components/actions/user";

export default function SignupCheck({ setEmailState, setIsSuccessProp, setIsAlertOpen, setAlertMessage }) {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [checkcode, setCheckCode] = useState('');
    const [timer, setTimer] = useState(0); // 타이머 값 수정
    const [isTimerExpired, setIsTimerExpired] = useState(false);

    const generateVerificationCode = () => {
        return Math.floor(100000 + Math.random() * 900000);
    };

    const handleSendVerificationCode = async () => {
        try {
            if (email.trim() !== '') {
                let code = generateVerificationCode(); // 새로운 코드 생성
                sendEmail(email, code); // 이메일 보내기
                setCode(code);
                console.log("발급인증코드" + code);
                setAlertMessage(`인증 코드를 ${email} 주소로 전송했습니다.`);
                setIsAlertOpen(true);
                startTimer();
            } else {
                setAlertMessage('이메일 주소를 입력하세요.');
                setIsAlertOpen(true);
            }
        } catch (error) {
            console.error("인증 코드 전송 실패:", error);
            setAlertMessage('인증 코드 전송 실패');
            setIsAlertOpen(true);
        }
    };

    const startTimer = () => {
        setTimer(180); // 3분으로 초기화
        setIsTimerExpired(false); // 타이머 만료 상태 초기화
        const intervalId = setInterval(() => {
            setTimer(prevTime => prevTime - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(intervalId);
            setTimer(0); // 타이머가 종료되면 0으로 설정
            setIsTimerExpired(true); // 타이머 만료 상태 설정
            setIsSuccessProp(false); // 인증 코드 만료 시 isSuccess 상태를 false로 업데이트
            setAlertMessage('인증코드가 만료되었습니다.');
            setIsAlertOpen(true);
        }, 180000); // 3분 (1000ms * 180초)
    };

    const handleCheckCode = () => {
        if (isTimerExpired) {
            setAlertMessage('인증코드가 만료되었습니다.');
            setIsAlertOpen(true);
            setCheckCode('');
        } else {
            console.log("체크인증코드" + code);
            if (checkcode === code.toString()) {
                setAlertMessage('인증되었습니다.');
                setIsAlertOpen(true);
                setTimer(0);
                setIsSuccessProp(true); // 인증 코드 확인 시 isSuccess 상태를 true로 업데이트
            } else {
                setAlertMessage('인증코드가 맞지 않습니다.');
                setIsAlertOpen(true);
            }
        }
    };

    useEffect(() => {
        if (timer === 0) {
            setIsTimerExpired(true);
        }
    }, [timer]);

    return (
        <div>
            <div className={style.checkCodeContainer}>
                <TextField
                    label="이메일"
                    variant="outlined"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailState(e.target.value);
                    }}
                    fullWidth
                />
                <button onClick={handleSendVerificationCode}>
                    인증코드 전송
                </button>
            </div>
            <div className={style.checkCodeContainer}>
                <TextField
                    label="인증코드"
                    variant="outlined"
                    value={checkcode}
                    onChange={(e) => setCheckCode(e.target.value)}
                    fullWidth
                />
                <button onClick={handleCheckCode}>
                    확인
                </button>
            </div>
            {timer > 0 && (
                <div className={style.timerContainer}>
                    {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
                </div>
            )}
        </div>
    );
}