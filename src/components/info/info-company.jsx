"use client"

import style from "@/styles/info/info-user.module.css";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import * as PropTypes from "prop-types";
import {MenuItem, Select} from "@mui/material";

function DatePicker(props) {
    return null;
}

DatePicker.propTypes = {
    fullWidth: PropTypes.bool,
    onChange: PropTypes.func,
    variant: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.any,
    views: PropTypes.arrayOf(PropTypes.string)
};
export default function InfoCompany() {
    const [business, setBusiness] = useState('Y');
    const [company, setCompany] = useState('');
    const [ceo, setCeo] = useState('');
    const [status, setStatus] = useState('');
    const [sectors, setSectors] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div className={style.UserContainer}>
            <h2 className={style.MainText}>기업정보</h2>
            <form onSubmit={handleSubmit} className={style.formContainer}>
                <Select
                    labelId="사업형태"
                    variant="outlined"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    fullWidth
                >
                    <MenuItem value={"Y"}>사업자</MenuItem>
                    <MenuItem value={"N"}>예비창업자</MenuItem>
                </Select>
                <TextField
                    label="기업명"
                    variant="outlined"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    fullWidth
                    sx = {{
                        marginBottom: "20px"
                    }}
                />
                <TextField
                    label="대표자명"
                    variant="outlined"
                    value={ceo}
                    onChange={(e) => setCeo(e.target.value)}
                    fullWidth
                    sx = {{
                        marginBottom: "20px"
                    }}
                />
                <TextField
                    label="업태"
                    variant="outlined"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    fullWidth
                    sx = {{
                        marginBottom: "20px"
                    }}
                />
                <TextField
                    label="제품/서비스(업종)"
                    variant="outlined"
                    value={sectors}
                    onChange={(e) => setSectors(e.target.value)}
                    fullWidth
                    sx = {{
                        marginBottom: "20px"
                    }}
                />
                <DatePicker
                    label="기업설립년도"
                    variant="outlined"
                    openTo="year"
                    views={['year']}
                    fullWidth
                    sx = {{
                        marginBottom: "20px"
                    }}
                />
                <button className={style.submitButton} type="submit">
                    기업정보 저장하기
                </button>
            </form>
        </div>
    )
}