import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(mode => !mode);


    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            { children }
        </DarkModeContext.Provider>
    )
}

export const useDarkMode = () => useContext(DarkModeContext);