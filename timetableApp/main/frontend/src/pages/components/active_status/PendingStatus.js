import React from 'react';

function PendingStatus({ children }) {
    return (
        <div className={`w-[104px] h-[40px] flex items-center justify-center  bg-pendingBg rounded-[5px]`}>
            <div className='flex items-center justify-center gap-[8px]'>
                <div className={`w-[8px] h-[8px] rounded-full bg-[#FF8F00] bg-#FF8F00 text-[#FF8F00]`}></div>
                <div className={`text-[#FF8F00]`}>
                    Pending
                </div>
            </div>
        </div>
    )
}

export default PendingStatus