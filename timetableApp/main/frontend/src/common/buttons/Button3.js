import React, { useContext } from 'react';
import ThemeContext from '../../global/contexts/ThemeContext';

function Button3({ children, dark }) {
  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;


  return (
    <div
      role='button'
      aria-describedby='button'
      className={`w-[73px] h-[48px] flex items-center justify-center ${themeValue === 'light' ? ' bg-[#F9FAFE] hover:bg-05 ' : ' bg-04 hover:bg-[#fff] '}  rounded-full duration-75`}
    >
      <div
        style={{ letterSpacing: '-0.25px' }}
        className='text-07 font-bold'
      >
        {children}
      </div>
    </div>
  )
}

export default Button3