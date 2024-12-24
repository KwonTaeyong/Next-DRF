import style from "@/styles/board/board-write.module.css"
import Link from "next/link";


async function getBoardInfo(id) {
    const response = await fetch(`http://api.nowonlab.com/bbs/detail/${id}`);
    const json = await response.json();
    console.log(json)
    return json
}


export default async function BoardUpdate({id}) {


    const detail = await getBoardInfo(id)
    return (
        <div className={style.WriteContainer}>
            <h2 className={style.MainText}>{detail.title}</h2>
            <div className={style.Card}>

                <table className={style.DetailTable}>
                    <tbody>
                    <tr>
                        <td className={style.SubTitleText}>제목</td>
                        <td><input type="text" id="title" name="title"
                                   defaultValue={detail.title}/></td>

                    </tr>
                    <tr>
                        <td className={style.SubTitleText}>작성자</td>
                        <td><input type="text" id="author" name="author"
                                   defaultValue={detail.author} readOnly={true}/></td>
                    </tr>
                    <tr>
                        <td className={style.SubTitleText}>작성일</td>
                        <td><input type="date" id="created_at" name="created_at"
                                   defaultValue={detail.created_at} readOnly={true}/></td>
                    </tr>
                    <tr>
                        <td className={style.SubTitleText}>수정일</td>
                        <td><input type="date" id="updated_at" name="updated_at"
                                   defaultValue={detail.updated_at} readOnly={true}/></td>
                    </tr>

                    </tbody>
                </table>
                <div className={style.TextArea}>
                    <textarea id="content" name="content" rows="4"
                              defaultValue={detail.content}></textarea>
                </div>
            </div>

            <div className={style.ButtonContainer}>
                <button>수정하기</button>
                <Link href={"/board"}>
                    <button>돌아가기</button>
                </Link>
            </div>
        </div>
    )
}
