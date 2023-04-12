import React, { useContext } from 'react'
import DeleteIcon from '../../../common/DeleteIcon';
import Text18px from '../../../common/text/Text18px';
import ThemeContext from '../../../global/contexts/ThemeContext';
import {motion} from 'framer-motion';

function RoomBox({ id, mainText, deleteHandler }) {
  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;

  return (
    <motion.div
      className={`relative p-[20px]  w-[300px] h-[100px] justify-between gap-[10px] flex flex-col ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"} rounded-[8px]`}
      initial={{ opacity:0,y:-75}}
      animate={{ opacity:1,y:0}}
      transition={{ delay: '0.5' }}
    >
      <div className='absolute right-[5px] top-[10px]'
        onClick={(e) => deleteHandler(id)}
      >
        <DeleteIcon />
      </div>
      <Text18px bold>{mainText}</Text18px>
    </motion.div>
  )
}

export default RoomBox