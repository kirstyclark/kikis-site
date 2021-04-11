import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({});

const ThemeProvider = (props) => {

    const toggleTheme = (value) => {
        setTheme(value);
    } 

    const [theme, setTheme] = useState('classic');

    const themeData = {
        theme: theme,
        toggleTheme: toggleTheme
    }

    return (
        <ThemeContext.Provider value={themeData} >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
