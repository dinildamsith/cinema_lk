import React, { createContext, useContext, useEffect, useState } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

    // MUI Theme setup
    const muiTheme = createTheme({
        palette: {
            mode,
        },
    });

    // Apply Tailwind dark class
    useEffect(() => {
        const html = document.documentElement;
        if (mode === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [mode]);

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <MuiThemeProvider theme={muiTheme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
