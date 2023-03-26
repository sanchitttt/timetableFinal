import React from 'react'
import AddPreferenceDesktop from './desktop';
import AddPreferenceMobile from './mobile';


function AddPreference({ closeModal }) {
    return (
        <>
            <div className='mobile:hidden desktop:block biggerDesktop:block'>
                <AddPreferenceDesktop
                    closeModal={closeModal}
                />
            </div>
            <div className='mobile:block desktop:hidden biggerDesktop:hidden'>
                <AddPreferenceMobile
                    closeModal={closeModal}
                />
            </div>
        </>
    )
}

export default AddPreference;