import React, { useContext } from 'react'
import CancelIcon from '../../../common/CancelIcon'
import Text15px from '../../../common/text/Text15px'
import Text24px from '../../../common/text/Text24px'
import ThemeContext from '../../../global/contexts/ThemeContext'
import NewButton from '../NewButton'

function EditSubjectHeading({ children, amount, subHeading }) {
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;

    return (
        <div className='flex justify-between items-center w-[100%]'>
            <div className='flex flex-col'>
                <Text24px>{children}</Text24px>
                <Text15px color={themeValue === 'dark' ? '05' : '07'}>{amount} {subHeading} </Text15px>
            </div>
        </div>
    )
}

export default EditSubjectHeading