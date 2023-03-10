import React from 'react';
import AddIcon from '../AddIcon';

function Button1({ children }) {
  return (
    <div
      role='button'
      aria-describedby='button'
      className='bg-01 flex duration-75 hover:bg-02 items-center justify-center mobile:h-[44px] desktop:h-[48px] desktop:w-[150px] mobile:w-[90px] rounded-full'
    >
      <div className='flex items-center'>
        <div className='left-[5%] bg-[#fff] w-[30px] h-[30px] flex items-center justify-center rounded-full mr-[5px]'>
          <AddIcon />
        </div>
        <div
          style={{ letterSpacing: '-0.25px' }}
          className='text-[15px] font-bold text-[#fff]'
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Button1