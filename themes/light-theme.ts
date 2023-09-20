import { createTheme } from '@mui/material'
import { grey, red } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        background:{
            default: grey[300]
        },
        primary:{
            main: "#4a148c"
        },
        secondary:{
            main: "#19867b"
        },
        error:{
            main: red.A400
        }
    },
    components:{
        MuiAppBar:{
            defaultProps:{
                elevation: 0,
            },
        }
    }
});