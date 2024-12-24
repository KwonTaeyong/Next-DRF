/// 게시판 상세보기 및 수정 페이지

import BoardUpdate from "@/components/board/board-update";

export default function Update(props) {
    const id = props.params.id
    return (
        <div>
            <BoardUpdate id={id}/>
        </div>

    )
}