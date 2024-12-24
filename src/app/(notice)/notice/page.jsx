/// 공고 페이지
import style from "@/styles/notice/notice-card.module.css";
import NoticeSearch from "@/components/notice/notice-search";
import NoticeCard from "@/components/notice/notice-card";
import NoticeRegion from "@/components/notice/notice-region";
import {getNotice} from '@/components/actions/notice'
import ErrorData from "@/components/common/error-data";
import NotData from "@/components/common/not-data";


export default async function Notice(props) {
    const {params: {}, searchParams: {searchType, searchKeyword}} = props;
    const type = searchType ? searchType : "search_all"
    const keyword = searchKeyword ? searchKeyword : ""


    const cards = await getNotice(type, keyword);

    return (
        <div>
            <h2 className={style.MainText}>공고</h2>
            <NoticeSearch type={type}
                          keyword={keyword}
            />
            <NoticeRegion/>
            {cards.message ? <ErrorData text={cards.message}/> :
                (
                    cards.length ?
                        cards.map((card) => (
                            <NoticeCard key={card.id}
                                        title={card.title}
                                        hostOrg={card.hostOrg}
                                        sourceOrg={card.sourceOrg}
                                        scrapDt={card.scrapDt}
                                        id={card.id}
                                        views={card.views}
                                        sourceUrl={card.sourceUrl}
                                        is_in_cart={card.is_in_cart}
                            />
                        ))
                        : (<NotData text={`${keyword}에 대한 검색 결과가 없습니다.`}/>)
                )
            }
        </div>
    );
}