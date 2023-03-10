import React, { useContext } from 'react'
import Text15px from '../../../../common/text/Text15px';

import ThemeContext from '../../../../global/contexts/ThemeContext';


function ProductItem({ name, quantity, price, total }) {
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;

    return (
        <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
                <Text15px>{name}</Text15px>
                <Text15px color={`${themeValue === 'dark' ? '06' : '07'}`}>
                    {quantity} x $ ${price}
                </Text15px>
            </div>
            <div>
                <Text15px>$ {total}</Text15px>
            </div>
        </div>
    )
}

export default ProductItem;