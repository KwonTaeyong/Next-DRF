import style from "@/styles/not-found.module.css"
import Link from "next/link";

export default function NotFound() {
    return (
        <div className={style.notfound}>
            <div>
                <h2>페이지를 찾을수없습니다.</h2>
                <p>
                    찾으시는 페이지가 존재하지 않거나 삭제되었습니다</p>
                    <p>일시적으로 이용할 수 없습니다.</p>
                <Link href="/">홈으로 돌아가기</Link>
            </div>
        </div>
    )
}