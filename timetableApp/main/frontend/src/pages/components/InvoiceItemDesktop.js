import React, { useContext } from 'react';
import RightArrow from '../../common/RightArrow';
import Text15px from '../../common/text/Text15px';
import ThemeContext from '../../global/contexts/ThemeContext';

function InvoiceItemDesktop({ id, clientName, clientEmail, paymentDue, total, status, totalSubjectsTaught }) {
  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;

  return (
    <div role='button' aria-describedby='button' className={`flex desktop:w-[730px] biggerDesktops:w-[900px] rounded-[8px] justify-between mt-[20px] items-center bg-03 gap-[100px] h-[72px] ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"}`} style={{ boxShadow: '0px 10px 10px -10px rgba(72, 84, 159, 0.100397)' }}>
      <div className='flex gap-[40px] ml-[30px]'>
        <div className='flex items-center'>
          <Text15px color={themeValue === 'dark' ? '05' : '07'}>#</Text15px>
          <Text15px bold>{id}</Text15px>
        </div>
        <div className='flex w-[170px]'>
          {/* <Text15px color={themeValue === 'dark' ? '05' : '07'}>Due</Text15px> */}
          <Text15px color={themeValue === 'dark' ? '05' : '07'}>{clientEmail}</Text15px>
        </div>
        <div className=''>
          <Text15px>{clientName}</Text15px>
        </div>
      </div>

      <div className='flex gap-[40px] items-center'>
        <Text15px>{totalSubjectsTaught} subjects</Text15px>
        <div>
          <img width='80px' className='rounded-[999px]' src='https://imgs.search.brave.com/YM_sGs6i48GeL3PE6z9GiUM03PHX5g8XLPEoKuQ9Rmk/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9kbTBx/eDh0MGk5Z2M5LmNs/b3VkZnJvbnQubmV0/L3RodW1ibmFpbHMv/dmlkZW8vRXl2RjBq/a1BnL3ZpZGVvYmxv/Y2tzLXBvcnRyYWl0/LW9mLXlvdW5nLXN1/Y2Nlc3NmdWwtZmVt/YWxlLWVtcGxveWVl/LWFzaWFuLXdvbWFu/LWVudHJlcHJlbmV1/ci13b3JrZXItaW4t/YnVzeS1vZmZpY2Ut/bG9va3MtYXQtY2Ft/ZXJhLXNtaWxlX2hh/am9qX2Z5el90aHVt/Ym5haWwtMTA4MF8w/MS5wbmc' alt='picture' />
          {/* <PaymentStatus status={status} /> */}
        </div>
        <div className='mr-[15px]'>
          <RightArrow />
        </div>

      </div>

    </div>
  )
}

export default InvoiceItemDesktop;