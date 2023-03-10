import React, { useContext } from 'react'
import ThemeContext from '../../global/contexts/ThemeContext';

function Text24px({ children, color }) {
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;

    return (
        <div className={`text-[24px] font-bold  ${themeValue==='dark'? "text-[#fff]" : "text-[#000]"}`} style={{ letterSpacing: '-0.25px' }}>
            {children}
        </div>
    )
}

export default Text24px