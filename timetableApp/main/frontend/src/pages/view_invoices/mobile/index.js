import React, { useContext, useState } from 'react'
import Main from './main';
import StatusHeader from './header';
import Footer from './footer';
import ThemeContext from '../../../global/contexts/ThemeContext';

const mockData = {
    "id": "XM9141",
    "createdAt": "2021-08-21",
    "paymentDue": "2021-09-20",
    "description": "Graphic Design",
    "paymentTerms": 30,
    "clientName": "Alex Grim",
    "clientEmail": "alexgrim@mail.com",
    "status": "pending",
    "senderAddress": {
        "street": "19 Union Terrace",
        "city": "London",
        "postCode": "E1 3EZ",
        "country": "United Kingdom"
    },
    "clientAddress": {
        "street": "84 Church Way",
        "city": "Bradford",
        "postCode": "BD1 9PB",
        "country": "United Kingdom"
    },
    "items": [
        {
            "name": "Banner Design",
            "quantity": 1,
            "price": 156.00,
            "total": 156.00
        },
        {
            "name": "Email Design",
            "quantity": 2,
            "price": 200.00,
            "total": 400.00
        }
    ],
    "total": 556.00
}


function ViewInvoiceMobile() {
    const [data, setData] = useState(mockData);
    const Theme = useContext(ThemeContext);

    return (
        <div className='flex items-center justify-center flex-col gap-[20px]'>
            <StatusHeader status={data.status} />
            <Main data={data} />
            <Footer />
        </div>

    )
}

export default ViewInvoiceMobile