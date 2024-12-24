import EmailSharpIcon from "@mui/icons-material/EmailSharp";

const Mailbutton = ({setAlertMessage, setIsAlertOpen}) => {
    const handleMailpost = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/common/emailpost/", {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email: 'kty97@kakao.com'})
            });
            const data = await response.json(); // 응답을 받을 때까지 대기
            setAlertMessage("이메일 알림을 성공적으로 보냈습니다.")
            setIsAlertOpen(true)
        } catch (error) {
            setAlertMessage("이메일 알림을 보내는데 실패했습니다.")
            setIsAlertOpen(true)
        }
    }

    return (
        <li onClick={handleMailpost}> {/* 클릭 이벤트 핸들러로 변경 */}
            <span>이메일 알림받기</span> <EmailSharpIcon/>
        </li>
    );
}

export default Mailbutton;