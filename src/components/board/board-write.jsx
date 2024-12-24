import style from "@/styles/board/board-write.module.css";
import Link from "next/link";
import {redirect} from "next/navigation";
import BoardEditor from "./board-editor";

export default function BoardWrite() {

    const handleBoardpost = async (data) => {
        "use server"
        console.log(data);

        const response = await fetch("http://api.nowonlab.com/bbs/bbs_post/", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: data.get("title"),
                content: data.get("content"),
                author: 2
            })
        });

        if (response.status === 400) {
            console.log("error")
        } else {
            return redirect('/board')
        }
    }

    return (
        <form>
            <div className={style.WriteContainer}>
                <h2 className={style.MainText}>게시판 글작성</h2>
                <div className={style.Card}>
                    <table className={style.DetailTable}>
                        <tbody>
                            <tr>
                                <td className={style.SubTitleText}>제목</td>
                                <td><input type="text" id="title" name="title"/></td>
                            </tr>
                            <tr>
                                <td className={style.SubTitleText} htmlFor="author">작성자</td>
                                <td><input type="text" id="author" name="author"/></td>
                            </tr>
                            <tr>
                                <td className={style.SubTitleText} htmlFor="created_at">작성일</td>
                                <td><input type="date" id="created_at" name="created_at"/></td>
                            </tr>
                            <tr>
                                <td className={style.SubTitleText} htmlFor="updated_at">수정일</td>
                                <td><input type="date" id="updated_at" name="updated_at"/></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={style.TextArea}>
                        <textarea id="content" name="content"></textarea>
                    </div>
                </div>
                <div className={style.ButtonContainer}>
                    <button formAction={handleBoardpost}>저장</button>
                    <Link href={"/board"}>
                        <button>뒤로가기</button>
                    </Link>
                </div>
            </div>
        </form>
    );
}