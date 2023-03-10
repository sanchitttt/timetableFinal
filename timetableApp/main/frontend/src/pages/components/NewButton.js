import React from 'react';
import Button1 from '../../common/buttons/Button1';

function NewButton({children}) {
    return (
        <>
            <div className='mobile:hidden desktop:block'>
                <Button1>{children}</Button1>
            </div>
            <div className='mobile:desktop desktop:hidden'>
                <Button1>New</Button1>
            </div>
        </>
    )
}

export default NewButton;