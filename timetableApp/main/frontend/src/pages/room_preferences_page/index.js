import React from 'react'
import RoomPreferencesDesktop from './desktop';
import RoomPreferencesMobile from './mobile';



function RoomPrefencesPage() {
    return (
        <>
            <div className='desktop:hidden mobile:block'>
                <RoomPreferencesMobile />
            </div>
            <div className='desktop:block mobile:hidden'>
                <RoomPreferencesDesktop />
            </div>
        </>
    )
}

export default RoomPrefencesPage;