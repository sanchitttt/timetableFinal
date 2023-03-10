import React, { useContext } from 'react'
import Text15px from '../../common/text/Text15px'
import Text24px from '../../common/text/Text24px';
import ThemeContext from '../../global/contexts/ThemeContext';
import NewButton from './NewButton';


function PageHeading({ children, buttonText, subHeading, amount, onClickHandler }) {
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;

    const clickHandler = () => {
        onClickHandler();
    }

    return (
        <div className='flex justify-between items-center w-[100%]'>
            <div className='flex flex-col'>
                <Text24px>{children}</Text24px>
                <Text15px color={themeValue === 'dark' ? '05' : '07'}>{amount} {subHeading} </Text15px>
            </div>
            <div onClick={clickHandler}>
                <NewButton>{buttonText}</NewButton>
            </div>

        </div>
    )
}

export default PageHeading;