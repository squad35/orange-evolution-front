import {createTheme, Typography} from '@mui/material';
import "@fontsource/montserrat";

export const SquadTheme = createTheme({
    palette: {
        primary:{
            main:'#D9D9D9'
        },
        secondary:{
            main:'#0B0A0A'
        },
        
        background:{
            default:'#0B0A0A',
            paper:'#0B0A0A'
        },
        text:{
            primary:'#ffffff'
        }
    },
    typography: {
        fontFamily:'Montserrat'

    }

});