/// 공고 상세보기 컴포넌트


import style from "@/styles/notice/notice-detail.module.css";
import Link from "next/link";
import {addCart, getNoticeDetail} from "@/components/actions/notice"


export default async function NoticeDetail(props) {
    const detail = await getNoticeDetail(props.id);




    return (
        <div className={style.DetailContainer}>
            <h2 className={style.MainText}>지원사업 공고</h2>
            <div className={style.Card}>
                <h2 className={style.TitleText}>{detail.title}</h2>
                <table className={style.DetailTable}>
                    <tbody>
                    <tr>
                        <td className={style.SubTitleText}>소관부처·지자체</td>
                        <td>{detail.hostOrg}</td>
                    </tr>
                    <tr>
                        <td className={style.SubTitleText}>사업수행기관</td>
                        <td>{detail.sourceOrg}</td>
                    </tr>
                    <tr>
                        <td className={style.SubTitleText}>신청기간</td>
                        <td>{detail.scrapDt}</td>
                    </tr>
                    <tr>
                        <td className={style.SubTitleText}>문의처</td>
                        <td>{detail.hostOrg}({detail.hostName}){detail.hostPhone}</td>
                    </tr>
                    <tr>
                        <td className={style.SubTitleText}>사업신청방법</td>
                        <td>이메일접수 ({detail.hostEmail})</td>
                    </tr>
                    <tr>
                        <td className={style.SubTitleText}>본문링크</td>
                        <td><a href={detail.sourceUrl} target="_blank" rel="noopener noreferrer">{detail.sourceUrl}</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <div className={style.Content} dangerouslySetInnerHTML={{__html: detail.contents}}/>
                <br/>
                <br/>
            </div>
            <h2 className={style.SubText}>※ 본 지원사업에 대한 문의˙신청 등의 모든 절차는 수행기관에서 전담하고 있음을 안내드립니다.</h2>

            <div className={style.ButtonContainer}>
                <Link href="/notice">
                    <button>
                        돌아가기
                    </button>
                </Link>
                {detail.is_in_cart === false && (
                    <button>
                        찜하기
                    </button>
                )}
            </div>


        </div>
    );
}