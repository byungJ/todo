import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        updateDarkMode(!darkMode);
    }

    useEffect(() => {
        const isDark =
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(isDark);
        updateDarkMode(isDark)
    } ,[]);

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            { children }
        </DarkModeContext.Provider>
    )
}

// 사용하는 곳에서 매번
// const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
// 하기 번거로워서 Hooks으로 만들들었습니다.
export const useDarkMode = () => useContext(DarkModeContext);

function updateDarkMode(darkMode) {
    if(darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme='light'
    }
}