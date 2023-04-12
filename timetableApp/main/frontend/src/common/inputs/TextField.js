import React, { useContext } from 'react';
import ThemeContext from '../../global/contexts/ThemeContext';
import Text15px from '../text/Text15px';
import { motion } from 'framer-motion';

/**
 * @function TextField 
 * @param {String} value The string value
 * @param {Setter} Setter The onChange handler
 * @param {Label} label The label for the textfield
 * @param {placeholder} placeholder Sets the placeholder
 * @returns 
 */

function TextField({ value, onChange, label, placeholder, required, disabled }) {
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;

    return (
        <motion.div
            className='flex flex-col'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: '0.25' }}
        >
            {label && <Text15px color={`${themeValue === 'dark' ? "05" : "07"}`}>{label}</Text15px>}
            <input
                aria-describedby={disabled}
                disabled={disabled}
                style={{ border: '1px solid #252945', padding: '25px' }}
                width='100%'
                type='text'
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${themeValue === 'dark' ? 'bg-[#fff] text-08' : "bg-03 text-[#FFFFFF]"} rounded-[3px] h-[48px]`}
                required={required}
            />
        </motion.div>

    )
}

export default TextField