import React, { useContext } from 'react'
import Text18px from '../../../../common/text/Text18px';
import ThemeContext from '../../../../global/contexts/ThemeContext';
import ProductItem from './ProductItem';

function ProductDetails({ items, total }) {
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;

    return (
        <>
            <div className={`w-[279px] h-[148px] ${themeValue === 'dark' ? "bg-04" : "bg-[#F9FAFE]"} flex items-center justify-center flex-col rounded-[8px]`} style={{ overflowY: 'scroll' }}>
                <div className='w-[233px] h-[101px] flex flex-col  gap-[12px]'>
                    {items.map((item, idx) => {
                        return <ProductItem key={idx}
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                            total={item.total}
                        />
                    })}
                </div>
            </div>
            <div style={{ borderBottomRightRadius: '8px', borderBottomLeftRadius: '8px' }}
                className={`${themeValue === 'dark' ? 'bg-08' : 'bg-15'} w-[100%] flex h-[80px] items-center justify-center`}
            >
                <div className='w-[230px] h-[20px] flex justify-between items-center'>
                    <Text18px color='14'>Amount Due</Text18px>
                    <div className={`text-[32px] font-bold text-14  `} style={{ letterSpacing: '-0.25px' }}>
                       ${total}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;