import React from 'react'
import AddSubjectDesktop from './desktop';
import AddSubjectMobile from './mobile';

function AddSubject({ closeModal }) {
    return (
        <>
            <div className='mobile:hidden desktop:block biggerDesktop:block'>
                <AddSubjectDesktop
                    closeModal={closeModal}
                />
            </div>
            <div className='mobile:block desktop:hidden biggerDesktop:hidden'>
                <AddSubjectMobile
                    closeModal={closeModal}
                />
            </div>
        </>
    )
}

export default AddSubject;