import { useEffect } from "react";
import { useState } from "react";

const useDarkMode = () => {
    const [isDarkMode, setmode] = useState(false);
    const toggleDarkMode = () =>{
        setmode(!isDarkMode);
        window.localStorage.setItem('mode', !isDarkMode);
    }
    useEffect(() => {
        const localStorageIsDarkMode = JSON.parse(window.localStorage.getItem('mode'));

        localStorageIsDarkMode && setmode(localStorageIsDarkMode);
    }, [])
    return [
        isDarkMode,
        toggleDarkMode
    ];
    
};

export default useDarkMode;


