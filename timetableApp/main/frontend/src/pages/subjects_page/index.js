import React, { useContext, useEffect, useState } from 'react'
import SubjectsMobile from './mobile';
import SubjectsDesktop from './desktop';



function SubjectsPage() {
    return (
        <div>
            <div className='desktop:hidden mobile:block'>
                <SubjectsMobile />
            </div>
            <div className='desktop:block mobile:hidden'>
                <SubjectsDesktop />
            </div>
        </div>

    )
}

export default SubjectsPage;