import React, { useState } from 'react'

const daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const columns = ['Day', 'Branch', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

function Table({ data }) {
    // const rowSpanLength = data[0][1].length + 1;
    return (
        <div className='flex flex-col border-t-[1px] border-r-[1px] border-l-[1px] text-[12px]'>
            {data.map((item, idx) => {
                return <div className='container flex border-b-[1px] '>
                    <div className='leftSide w-[80px] border-r-[1px] px-[10px] uppercase text-[10px]  '>
                        {daysArr[idx]}
                    </div>
                    <div className='w-[100%]'>
                        {item.map((eachItem, idx) => {
                            return <div className={`grid grid-cols-9   ${idx !== item.length - 1 && 'border-b-[1px]'}`}>
                                <div className='px-[5px] font-bold '>{eachItem[0]}</div>
                                {eachItem[1].map((scheduleItem) => {
                                    return <div
                                        className='border-l-[1px] h-[100%] px-[5px]  '
                                    >
                                        {scheduleItem ? scheduleItem : '-'}
                                    </div>
                                })}
                            </div>
                        })}
                    </div>
                </div>
            })}
        </div>
    )
}

export default Table