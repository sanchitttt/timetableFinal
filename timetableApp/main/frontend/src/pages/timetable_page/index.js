import React from 'react'
import TimetableDesktop from './desktop';
import TimetableMobile from './mobile';



function TimetablePage() {
    return (
        <>
            <div className='desktop:hidden mobile:block'>
                <TimetableMobile />
            </div>
            <div className='desktop:block mobile:hidden'>
                <TimetableDesktop />
            </div>
        </>
    )
}

export default TimetablePage;