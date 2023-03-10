import React from 'react'
import Text13px from '../text/Text13px'

function ErrorLabel({ children }) {
    return (
        <div className={` text-[13px] text-[#EC5757]`} style={{ letterSpacing: '-0.25px' }}>
            {children}
        </div>
    )
}

export default ErrorLabel