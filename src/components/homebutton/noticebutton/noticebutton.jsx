import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';
const Noticebutton = ({ setAlertMessage, setIsAlertOpen }) => {
    const handleNoticepost = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/common/kakaopost/", {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({id: 'kty97'})
            });
            setAlertMessage("공고미 알림을 성공적으로 보냈습니다.");
            setIsAlertOpen(true);
        } catch (error) {
            setAlertMessage("공고미 알림을 보내는데 실패했습니다.");
            setIsAlertOpen(true);
        }
    }

    return (
        <li onClick={handleNoticepost}>
            <span>공고미 신청하기</span><NotificationsActiveSharpIcon/>
        </li>
    );
}

export default Noticebutton;