import React, { useContext } from 'react'
import Text24px from '../../../../common/text/Text24px'
import ThemeContext from '../../../../global/contexts/ThemeContext';

function AddPreferenceMobile() {
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;
    
    return (
        <div className={`w-[100%] flex flex-col gap-[5px] h-[100vh] px-[20px] ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"} overflow-scroll`}>
            <div className='w-[90%] flex flex-col gap-[25px]'>
                <div className='w-[100%]'>
                    <Text24px>Add Subject</Text24px>
                </div>
            </div>
        </div>
    )
}

export default AddPreferenceMobile;