import React, { useContext } from 'react';
import ThemeContext from '../../global/contexts/ThemeContext';
import Logo from '../Logo';
import ProfilePicture from '../ProfilePicture';
import TeacherIcon from '../TeacherIcon';
import ThemeIcon from '../ThemeIcon';
import BooksIcon from '../BooksIcon';
import { useNavigate } from 'react-router-dom';
import TimetableIcon from '../TimetableIcon';
import RoomsIcon from '../RoomsIcon';

function MobileNavbar() {
  const Theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const { themeValue } = Theme;

  return (
    <div className={` w-[100%] h-[72px] flex justify-between items-center ${themeValue === 'dark' ? "bg-03" : "bg-[#373B53]"}`}>
      <div className='ml-[10px]'>
        <Logo />
      </div>
      <div className='flex items-center justify-between mr-[10px] gap-[25px]'>
        <div onClick={() => navigate('/timetable')}>
          <TimetableIcon />
        </div>
        <div onClick={() => navigate('/rooms')}>
          <RoomsIcon />
        </div>
        <div
          onClick={() => navigate('/subjects')}
        ><BooksIcon
          />
        </div>
        <div
          onClick={() => navigate('/teachers')}
        >
          <TeacherIcon />
        </div>

        <ThemeIcon />
        <div className='w-[1px] h-[72px] bg-[#494E6E] '></div>
        <ProfilePicture />
      </div>
    </div>
  )
}

export default MobileNavbar;