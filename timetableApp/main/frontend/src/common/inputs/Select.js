import React, { useContext } from 'react';
import ThemeContext from '../../global/contexts/ThemeContext';
import Text15px from '../text/Text15px';

/**
 * @function Select
 * @param {React.Component} children For rendering options
 * @param  {String} value The currently selected option
 * @param {Setter} onChange Called on onChange handler 
 * @param {Label} label Label for select
 */

function Select({ children, value, onChange, label }) {
  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;

  return (
    <div className='w-[100%]'>
      {label && <Text15px color={`${themeValue === 'dark' ? "05" : "07"}`}>{label}</Text15px>}
      <select value={value} style={{ background: themeValue === 'dark' ? '#fff' : '#1E2139', color: 'white',paddingRight:'15px',paddingLeft:'15px' }} className={`h-[48px] w-[100%]  ${themeValue === 'dark' ? "05" : "07"}`} name={`select-${label}`} id={`select-${label} `} onChange={onChange}>
        {children}
      </select>
    </div>
  )
}

export default Select