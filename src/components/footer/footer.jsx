/// 푸터 컴포넌트

import style from "@/styles/footer.module.css"

export default function Footer() {
    return (
        <footer className={style.footer}>
            <img src="/img/logo2.png" alt="로고" />
            <p>
                나우온 | 대표자: 정현제 | 사업자번호: 499-81-00612
                사업자 정보 확인 | 전화번호: 055-256-4985<br/>
                주소: 경상남도 창원시 의창구 팔용로 44, 48번길
                창원스마트업타워 1406호
            </p>
        </footer>
    )
}