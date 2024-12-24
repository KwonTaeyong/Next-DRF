/// 내 정보 페이지

import style from "@/styles/info/info.module.css";
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import InfoCarousel from "@/components/info/info-carousel";
import InfoAlert from "@/components/info/info-alert";
import {Info} from "@/components/actions/user";


export default async function UserInfo() {

    const userinfo = await Info();

    return (
        <div className={style.container}>
            <h2 className={style.MainText}>유저</h2>
            <h1 className={style.SubText}>{userinfo.email}</h1>

            <div className={style.avatarContainer}>
                <Avatar
                    alt="User Avatar"
                    src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
                    sx={{width: 200, height: 200}}
                />
                <div className={style.addButtonContainer}>
                    <label htmlFor="avatarUpload" className={style.addButton}>
                        <AddIcon/>
                        <input
                            id="avatarUpload"
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            style={{display: 'none'}}
                        />
                    </label>
                </div>
            </div>
            <InfoAlert/>
            <InfoCarousel/>
        </div>
    );
}