import React from 'react'

function Button5({ children, longWidth, height }) {
  return (
    <div
      role='button'
      aria-describedby='button'
      className={`flex items-center  justify-center ${longWidth ? 'w-[149px]' : 'w-[89px]'} h-[48px] bg-09 hover:bg-10 rounded-full duration-75 `}
    >
      <div className='text-[#fff] font-bold'>
        {children}
      </div>
    </div>
  )
}

export default Button5