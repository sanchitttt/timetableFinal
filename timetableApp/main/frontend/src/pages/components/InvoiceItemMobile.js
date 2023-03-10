import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Text15px from '../../common/text/Text15px';
import Text24px from '../../common/text/Text24px';
import ThemeContext from '../../global/contexts/ThemeContext';
import PaymentStatus from './active_status';


function InvoiceItemMobile({ id, clientName, clientEmail, paymentDue, total, status, totalSubjectsTaught }) {
  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;
  const navigate = useNavigate();

  return (
    <div className={`w-[327px] h-[134px] flex items-center justify-center ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"} rounded-[10px]`}
      role='button' aria-describedby='button'
      onClick={() => navigate(`view/${id}`)}
    >
      <div className='w-[279px] h-[93px] flex flex-col gap-[7.5px]'>

        <div className='topRow flex justify-between items-center'>
          <div className='flex'>
            <Text15px color={themeValue === 'dark' ? '05' : '07'}>#</Text15px>
            <Text15px bold>{id}</Text15px>
          </div>
          <div>
            <Text15px>{clientName}</Text15px>
          </div>
        </div>

        <div className='bottomRow flex items-center justify-between'>
          <div className='flex flex-col justify-between'>
            <div className='flex gap-[5px]'>
              {/* <Text15px color={themeValue === 'dark' ? '05' : '07'}>Due</Text15px> */}
              <Text15px color={themeValue === 'dark' ? '05' : '07'}>{clientEmail}</Text15px>
            </div>
            <Text24px>{totalSubjectsTaught} subjects</Text24px>
          </div>
          <div>
            <img width='80px' className='rounded-[999px]' src='https://imgs.search.brave.com/YM_sGs6i48GeL3PE6z9GiUM03PHX5g8XLPEoKuQ9Rmk/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9kbTBx/eDh0MGk5Z2M5LmNs/b3VkZnJvbnQubmV0/L3RodW1ibmFpbHMv/dmlkZW8vRXl2RjBq/a1BnL3ZpZGVvYmxv/Y2tzLXBvcnRyYWl0/LW9mLXlvdW5nLXN1/Y2Nlc3NmdWwtZmVt/YWxlLWVtcGxveWVl/LWFzaWFuLXdvbWFu/LWVudHJlcHJlbmV1/ci13b3JrZXItaW4t/YnVzeS1vZmZpY2Ut/bG9va3MtYXQtY2Ft/ZXJhLXNtaWxlX2hh/am9qX2Z5el90aHVt/Ym5haWwtMTA4MF8w/MS5wbmc' alt='picture' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceItemMobile;