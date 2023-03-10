import React, { useContext } from 'react'
import ThemeContext from '../../global/contexts/ThemeContext';

function Text0715px({ children, color, bold }) {
  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;

  return (
    <div className={` text-[15px] font-[500] ${bold && 'font-bold'} text-07`} style={{ letterSpacing: '-0.25px' }}>
      {children}
    </div>
  )
}

export default Text0715px;