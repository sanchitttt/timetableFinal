import React, { useContext } from 'react'
import ThemeContext from '../../global/contexts/ThemeContext';

function Text20px({children}) {
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;

    return (
        <div className={`text-[20px] font-bold  ${themeValue === 'dark' ? "text-[#fff]" : "text-[#000]"}`} style={{ letterSpacing: '-0.25px' }}>
            {children}
        </div>
    )
}

export default Text20px