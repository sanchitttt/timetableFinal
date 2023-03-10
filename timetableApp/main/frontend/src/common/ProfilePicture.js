import React from 'react'
import img from '../assets/logo.webp'

function ProfilePicture() {
    return (
        <img
            src={img}
            alt='profilePicture'
            className='rounded-full'
            width='32px'
            height='32px'
        />
    )
}

export default ProfilePicture