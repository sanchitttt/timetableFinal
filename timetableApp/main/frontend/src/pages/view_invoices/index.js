import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import MobileNavbar from '../../common/navbar/MobileNavbar';
import ViewInvoiceDesktop from './desktop';
import ViewInvoiceMobile from './mobile';

function ViewInvoicePage() {
    const { id } = useParams();
    const [data, setData] = useState({});

    return (
        <div className='flex flex-col gap-[25px]'>
            {/* <div className='desktop:hidden mobile:block'>
                <ViewInvoiceDesktop />
            </div> */}
            <MobileNavbar />
            <div className='desktop:hidden mobile:block'>
                <ViewInvoiceMobile />
            </div>
        </div>
    )
}

export default ViewInvoicePage;