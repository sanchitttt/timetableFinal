import React, { useContext } from 'react'
import ThemeContext from '../../../../global/contexts/ThemeContext';
import Button3 from '../../../../common/buttons/Button3';
import Button5 from '../../../../common/buttons/Button5';
import Button2 from '../../../../common/buttons/Button2';


function Footer() {
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;

    return (
        <div className={`flex items-center w-[100vw] gap-[15px] h-[91px] justify-center ${themeValue === 'dark' ? "bg-03" : "bg-14"}`}>
            <Button3>Edit</Button3>
            <Button5 >Delete</Button5>
            <Button2 longWidth>Mark as paid</Button2>
        </div>
    )
}

export default Footer;