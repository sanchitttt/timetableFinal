import React from 'react'
import MergeSubjectDesktop from './desktop';
import MergeSubjectMobile from './mobile';

function AddMergeSubjectBox({ closeModal }) {
    return (
        <>
            <div className='mobile:hidden desktop:block biggerDesktop:block'>
                <MergeSubjectDesktop
                    closeModal={closeModal}
                />
            </div>
            <div className='mobile:block desktop:hidden biggerDesktop:hidden'>
                <MergeSubjectMobile
                    closeModal={closeModal}
                />
            </div>
        </>
    )
}

export default AddMergeSubjectBox;