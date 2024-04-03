import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    const changeTheme = () => {
        setDarkMode((themeMode) => !themeMode);
    };

    return (
        <ThemeContext.Provider value={{darkMode, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};