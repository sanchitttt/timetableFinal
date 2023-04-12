import React, { useContext, useEffect, useState } from 'react'
import DeleteIcon from '../../../common/DeleteIcon';
import Text15px from '../../../common/text/Text15px';
import Text18px from '../../../common/text/Text18px';
import ThemeContext from '../../../global/contexts/ThemeContext';
import {motion} from 'framer-motion';

function TeachersBox({ id, teacherName, teacherInitials, subjectsTaught, deleteHandler }) {
    const Theme = useContext(ThemeContext);
    const [isHovered, setIsHovered] = useState(false);
    const { themeValue } = Theme;

    const mouseEnterHandler = (e) => {
        setIsHovered(true);
    }

    const mouseLeaveHandler = (e) => {
        setIsHovered(false);
    }

    return (
        <motion.div
            role={'button'}
            className={` relative p-[20px] mobile:w-[150px] mobile:h-[200px] desktop:w-[220px] desktop:h-[110px]  justify-between gap-[10px] flex flex-col ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"} rounded-[8px]`}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: -75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: '0.5' }}
        >
            {isHovered && <div className='absolute right-[5px] top-[10px]'
                onClick={(e) => deleteHandler(id)}
            >
                <DeleteIcon />
            </div>}

            <Text18px bold>{teacherName}</Text18px>
            <Text15px color={themeValue === 'dark' ? '05' : '07'} bold>{teacherInitials}</Text15px>
        </motion.div>
    )
}

export default TeachersBox;