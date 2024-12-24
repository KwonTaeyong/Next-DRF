/// 게시판 테이블 컴포넌트
"use client"
import {useRouter} from "next/navigation";
import style from "@/styles/board/board-table.module.css"

export default function BoardTable({id, title, author, created_at}) {
    const router = useRouter();

    const onClick = () => {
        router.push(`/update/${id}`)
    }

    const formattedDate = created_at.slice(0, 10);
    return (

        <tr className={style.Styledtr} key={id} onClick={onClick}>
            <td>{title}</td>
            <td>{author}</td>
            <td>{formattedDate}</td>
            <td>{author}</td>
        </tr>
    )
}







