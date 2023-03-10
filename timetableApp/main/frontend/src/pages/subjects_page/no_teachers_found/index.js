import React from 'react'
import EmptyData from '../../../common/EmptyData'
import Text15px from '../../../common/text/Text15px'
import Text24px from '../../../common/text/Text24px'

function SubjectsPage() {
    return (
        <div className='flex flex-col justify-center items-center gap-[15px]'>
            <EmptyData />
            <Text24px>There is nothing here</Text24px>
            <div style={{textAlign:'center'}}>
                <Text15px>
                    Create an invoice by clicking the
                </Text15px>
                <Text15px>
                    New button and get started
                </Text15px>
            </div>


        </div>
    )
}

export default SubjectsPage;