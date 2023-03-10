import React, { useContext } from 'react'
import Text15px from '../../../../common/text/Text15px';
import ThemeContext from '../../../../global/contexts/ThemeContext';
import PaymentStatus from '../../../components/active_status';

function StatusHeader({ status }) {
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;

    return (
        <div className={`w-[327px] h-[91px] flex justify-center items-center ${themeValue === 'dark' ? "bg-03" : "bg-14"} rounded-[8px]`}>
            <div className='w-[280px] h-[40px] flex justify-between items-center'>
                <Text15px color={`${themeValue==='dark'?"05":"13"}`}>Status</Text15px>
                <PaymentStatus status={status} />
            </div>

        </div>
    )
}

export default StatusHeader;