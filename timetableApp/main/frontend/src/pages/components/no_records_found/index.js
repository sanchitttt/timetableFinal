import React from 'react'
import EmptyData from '../../../common/EmptyData'
import Text15px from '../../../common/text/Text15px'
import Text24px from '../../../common/text/Text24px';

function NoRecords({mainHeading,subHeading}) {
    return (
        <div className='flex flex-col justify-center items-center gap-[15px]'>
            <EmptyData />
            <Text24px>{mainHeading}</Text24px>
            <div style={{textAlign:'center'}}>
                <Text15px>
                    {subHeading}
                </Text15px>
            </div>


        </div>
    )
}

export default NoRecords;