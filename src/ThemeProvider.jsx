import React, { createContext, useState } from 'react';
import App from './App';

export const ThemeContext = createContext({});

const ThemeProvider = () => {

    const [theme, setTheme] = useState('classic');

    const toggleTheme = (value) => {
        setTheme(value);
        console.log(theme);
    } 

    const themeData = {
        theme: theme,
        toggleTheme: toggleTheme
    }

    return (
        <ThemeContext.Provider value={themeData} >
            <App />
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
