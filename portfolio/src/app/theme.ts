import { createTheme } from '@mui/material/styles';
import inter from './fonts';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2576D3',
        },
    },
    typography: {
        fontFamily: inter.style.fontFamily,
    },
});

export default theme;
