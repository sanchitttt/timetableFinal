import React from 'react';

function PaidStatus({ children }) {
  return (
    <div className={`w-[104px] h-[40px] flex items-center justify-center  bg-paidBg rounded-[5px]`}>
      <div className='flex items-center justify-center gap-[8px]'>
        <div className={`w-[8px] h-[8px] rounded-full bg-[#33d69f] bg-#FF8F00 text-[#33d69f]`}></div>
        <div className={`text-[#33d69f]`}>
          Active
        </div>
      </div>
    </div>
  )
}

export default PaidStatus