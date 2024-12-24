"use client"
import React from 'react';
import {createTheme} from "@mui/material";


const theme = createTheme({
    typography: {
        fontFamily: '"IBM_Plex_Sans",sans-serif', // 원하는 폰트로 변경
    },
    palette: {
        primary: {
            main: '#319795',
        }
    },
    components: {
        MuiBottomNavigationAction: {
            styleOverrides: {
                label: {
                    fontSize: 12
                },

            },
        },
        MuiTextField: {
            styleOverrides: {
                label : {
                    fontSize: 12
                }
            }
        }
    }
});


export default theme;