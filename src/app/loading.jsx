import style from "@/styles/loading.module.css"
import {Box, CircularProgress, Typography} from "@mui/material";

export default function Loading() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh', // 전체 화면 높이를 채움
                backgroundColor: 'white', // 배경색 설정
            }}
        >
            <CircularProgress/>
            <Typography variant="h6" sx={{mt: 2}}>

            </Typography>
        </Box>
    )
}