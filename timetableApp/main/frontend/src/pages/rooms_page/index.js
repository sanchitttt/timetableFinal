import React from 'react'
import RoomsPageDesktop from './desktop'
import RoomsPageMobile from './mobile'

function RoomsPage() {
    return (
        <div>
            <div className='desktop:hidden mobile:block'>
                <RoomsPageMobile />
            </div>
            <div className='desktop:block mobile:hidden'>
                <RoomsPageDesktop />
            </div>
        </div>
    )
}

export default RoomsPage