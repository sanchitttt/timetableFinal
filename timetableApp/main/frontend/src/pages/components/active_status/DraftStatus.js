import React, { useContext } from 'react';
import ThemeContext from '../../../global/contexts/ThemeContext';


function DraftStatus({ children }) {
  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;

  return (
    <div className={`w-[104px] h-[40px] flex items-center justify-center  ${themeValue === 'dark'? "bg-draftBgDark" : " bg-[#373b531a]"} rounded-[5px]`}>
      <div className='flex items-center justify-center gap-[8px]'>
        <div className={`w-[8px] h-[8px] rounded-full ${themeValue === 'dark'? "bg-05" : "bg-[#373B53]"}`}></div>
        <div className={`${themeValue === 'dark'? "text-05" : "text-[#373B53]"} `}>
          Inactive
        </div>
      </div>

    </div>
  )
}

export default DraftStatus