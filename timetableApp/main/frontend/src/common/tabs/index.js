import React, { useContext } from 'react'
import ThemeContext from '../../global/contexts/ThemeContext';

function Tab({ children, active }) {
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;
    // ${themeValue === 'dark' ? 'bg-[#fff] text-08' : "bg-03 text-[#FFFFFF]"}
    return (
        <div role='button' aria-describedby='button' className={` rounded-full px-[20px]  py-[10px] ${themeValue==='dark' && 'text-14'} ${active ? "text-14" : "tab"} flex items-center justify-center ${active ? 'bg-01' : ""} `}>
            {children}
        </div>
    )
}

export default Tab