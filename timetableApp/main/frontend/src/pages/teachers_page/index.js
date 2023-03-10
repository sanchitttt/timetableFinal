import React from 'react'
import TeachersDesktop from './desktop';
import TeachersMobile from './mobile';

function TeachersPage() {
    return (
        <div>
            <div className='desktop:hidden mobile:block'>
                <TeachersMobile />
            </div>
            <div className='desktop:block mobile:hidden'>
                <TeachersDesktop />
            </div>
        </div>
    )
}

export default TeachersPage;