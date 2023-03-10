import React, { useContext } from 'react'
import ThemeContext from '../../global/contexts/ThemeContext';
import Text15px from '../text/Text15px';

function Checkbox({ value, onChange, label }) {
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;
    return (
        <div className='flex items-center w-[30px] items-center justify-between'>
            {label && <Text15px color={`${themeValue === 'dark' ? "05" : "07"}`}>{label}</Text15px>}
            <input type='checkbox' checked={value} onChange={onChange} />
        </div>
    )
}

export default Checkbox