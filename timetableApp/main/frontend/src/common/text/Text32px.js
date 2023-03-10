import React, { useContext } from 'react'
import ThemeContext from '../../global/contexts/ThemeContext';

function Text32px({ children, color }) {
  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;

  return (
    <div className={`text-[32px] font-bold  ${color ? `text-${color}` : themeValue === 'dark' ? "text-[#fff]" : "text-[#000]"}`} style={{ letterSpacing: '-1px' }}>
      {children}
    </div>
  )
}

export default Text32px;