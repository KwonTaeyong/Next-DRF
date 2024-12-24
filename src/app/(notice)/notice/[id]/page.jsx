/// 공고 상세보기 페이지

import NoticeDetail from "@/components/notice/notice-detail";

export default function Detail(props) {
    const {params: {id}, searchParams: {is_in_cart}} = props



    return (
        <div>
            <NoticeDetail id={id} is_in_cart={is_in_cart}/>
        </div>
    )
}