import React from 'react'

function Button2({ children, onClick }) {
  return (
    <div onClick={onClick} role='button' aria-describedby='button' className='bg-01 flex hover:bg-02 justify-center items-center  mobile:h-[44px] desktop:h-[42px] desktop:w-[131px] mobile:w-[90px] rounded-full'>
      <div style={{ letterSpacing: '-0.25px' }} className='desktop:text-[14px] mobile:text-[13px] font-bold text-[#fff] flex items-center justify-center'>
        {children}
      </div>
    </div>
  )
}

export default Button2