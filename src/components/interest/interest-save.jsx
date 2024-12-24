import NoticeCard from "@/components/notice/notice-card";
import style from "@/styles/interest/interest.module.css"
import {getSaves} from "@/components/actions/interest";



export default async function InterestSave() {
    const saves = await getSaves();
    console.log(saves)

    return (
        <div className={style.TabContainer}>
            {saves.map((save) => (
                <NoticeCard
                    key={save.id}
                    title={save.title}
                    hostOrg={save.hostOrg}
                    sourceOrg={save.sourceOrg}
                    scrapDt={save.scrapDt}
                    id={save.id}
                    views={save.views}
                    sourceUrl={save.sourceUrl}
                />
            ))}
        </div>
    );
}