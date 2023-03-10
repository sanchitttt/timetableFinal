import React, { useContext, useState } from 'react'
import Text15px from '../../../../common/text/Text15px';
import Text20px from '../../../../common/text/Text20px';
import ThemeContext from '../../../../global/contexts/ThemeContext';
import ProductDetails from './ProductDetails';
// import mockData from '../../../../../assets/data/data.json';


function Main({ data }) {
    const [invoiceData, setInvoiceData] = useState(data);
    const { id, clientName, paymentDue, total, status, description, clientAddress, createdAt, senderAddress, clientEmail, items } = invoiceData;

    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;

    return (
        <div className={`w-[327px] h-[695px] ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"} rounded-[8px] flex justify-center`}>
            <div className='w-[279px]'>
                <div className='flex mt-[30px]'>
                    <Text15px color='06'>#</Text15px>
                    <Text15px bold >{id}</Text15px>
                </div>
                <div className='mt-[15px]'>
                    <div><Text15px color={themeValue === 'dark' ? '05' : '07'}>{description}</Text15px></div>
                    <div><Text15px color={themeValue === 'dark' ? '05' : '07'}>{senderAddress.street}</Text15px></div>
                    <div><Text15px color={themeValue === 'dark' ? '05' : '07'}>{senderAddress.city}</Text15px></div>
                    <div><Text15px color={themeValue === 'dark' ? '05' : '07'}>{senderAddress.postCode}</Text15px></div>
                    <div><Text15px color={themeValue === 'dark' ? '05' : '07'}>{senderAddress.country}</Text15px></div>
                </div>


                <div className='flex justify-between items-start mt-[30px]'>
                    <div className='flex flex-col gap-[30px]'>
                        <div>
                            <Text15px color={themeValue === 'dark' ? '05' : '07'}>Invoice Date</Text15px>
                            <Text20px>{createdAt}</Text20px>
                        </div>
                        <div>
                            <Text15px color={themeValue === 'dark' ? '05' : '07'}>Payment Due</Text15px>
                            <Text20px>{paymentDue}</Text20px>
                        </div>
                        <div>
                            <Text15px color={themeValue === 'dark' ? '05' : '07'}>Sent to</Text15px>
                            <Text20px>{clientEmail}</Text20px>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <Text15px color={themeValue === 'dark' ? '05' : '07'}>Bill To</Text15px>
                        <Text20px>{clientName}</Text20px>
                        <div>
                            <div><Text15px color={themeValue === 'dark' ? '05' : '07'}>{clientAddress.street}</Text15px></div>
                            <div><Text15px color={themeValue === 'dark' ? '05' : '07'}>{clientAddress.city}</Text15px></div>
                            <div><Text15px color={themeValue === 'dark' ? '05' : '07'}>{clientAddress.postCode}</Text15px></div>
                            <div><Text15px color={themeValue === 'dark' ? '05' : '07'}>{clientAddress.country}</Text15px></div>
                        </div>
                    </div>
                </div>
                <ProductDetails items={items} total={total} />
            </div>
        </div>
    )
}

export default Main;