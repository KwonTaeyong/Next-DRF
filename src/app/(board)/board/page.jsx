/// 게시판 페이지

import style from "@/styles/board/board.module.css"
import BoardTable from "@/components/board/board-table";
import BoardSearch from "@/components/board/board-search";
import DriveFileRenameOutlineSharpIcon from '@mui/icons-material/DriveFileRenameOutlineSharp';
import {getBoard} from '@/components/actions/board'
import React from "react";

export default async function Board(props) {
    const {params: {}, searchParams: {keyword}} = props;
    let key = "";

    if (keyword) {
        key = keyword
    }

    const boards = await getBoard(key);
    return (
        <div>
            <h2 className={style.MainText}>게시판</h2>
            <BoardSearch/>
            <a type="button" className={style.WriteButton} href={"/write"}>
                <DriveFileRenameOutlineSharpIcon/><span>글쓰기</span>
            </a>

            <table className={style.StyledTable}>
                <thead>
                <tr>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                </tr>
                </thead>
                <tbody>
                {boards.map((board) => (
                    <BoardTable key={board.id}
                                title={board.title}
                                author={board.author}
                                created_at={board.created_at}
                                id={board.id}/>
                ))}
                </tbody>
            </table>
        </div>
    );
}