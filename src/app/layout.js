import Navigation from "@/components/header/navigation"
import Footer from "@/components/footer/footer"
import ScrollTop from "@/components/scrolltop"
import style from "@/styles/global.module.css"
import {ThemeProvider} from "@mui/material";
import theme from "./theme/theme";
import Mobilenav from "@/components/header/mobilenav";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import React from "react";
import Mobileheader from "@/components/header/mobileheader";

export const metadata = {
    title: {
        template: "%s | 8125",
        default: "8125"
    },
}

export default function Layout({children}) {

    return (
        <html>
        <body className={style.body}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Navigation/>
                <Mobileheader/>
                <ScrollTop/>
                <div className={style.container}>
                    {children}
                </div>
                <Mobilenav/>
                <Footer/>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    )
}
