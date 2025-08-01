import { createTheme, Theme } from '@mui/material/styles';
import inter from './fonts';
import { createContext, useMemo, useState } from 'react';

export type ColorMode = 'light' | 'dark';

export const ColorModeContext = createContext<{ toggleColorMode: () => void; mode: ColorMode }>({
    toggleColorMode: () => { },
    mode: 'light',
});

export function useModeTheme(): [Theme, ColorMode, () => void] {
    const [mode, setMode] = useState<ColorMode>('light');
    const toggleColorMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: '#2576D3',
                    },
                },
                typography: {
                    fontFamily: inter.style.fontFamily,
                },
            }),
        [mode]
    );
    return [theme, mode, toggleColorMode];
}
