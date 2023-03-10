import React, { useContext } from 'react'
import ThemeContext from '../../global/contexts/ThemeContext';

function Text15px({ children, color, bold }) {
  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;

  return (
    <div className={` text-[15px] font-[500] ${bold && 'font-bold'} ${color ? `text-${color}` : themeValue === 'dark' ? "text-[#fff]" : "text-[#000]"}`} style={{ letterSpacing: '-0.25px' }}>
      {children}
    </div>
  )
}

export default Text15px