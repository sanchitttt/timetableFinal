import React, { useContext } from 'react';
import BooksIcon from '../BooksIcon';
import ThemeContext from '../../global/contexts/ThemeContext';
import Logo from '../Logo';
import ProfilePicture from '../ProfilePicture';
import TeacherIcon from '../TeacherIcon';
import ThemeIcon from '../ThemeIcon';
import { useNavigate } from 'react-router-dom';
import TimetableIcon from '../TimetableIcon';
import RoomsIcon from '../RoomsIcon';

function DesktopNavbar() {
  const Theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const { themeValue } = Theme;

  return (
    <div className={`w-[103px] h-[100vh] flex flex-col justify-between items-center ${themeValue === 'dark' ? "bg-03" : "bg-[#373B53]"}`}>
      <div className='mt-[15px]'>
        <Logo />
      </div>
      <div className='flex flex-col gap-[25px] justify-between items-center mb-[25px]'>
        <div onClick={() => navigate('/timetable')}>
          <TimetableIcon />
        </div>
        <div onClick={() => navigate('/rooms')}>
          <RoomsIcon />
        </div>
        <div onClick={() => navigate('/subjects')}>
          <BooksIcon />
        </div>
        <div onClick={() => navigate('/teachers')}>
          <TeacherIcon />
        </div>
        <ThemeIcon />
        <div className='w-[103px] h-[1px] bg-[#494E6E]'></div>
        <div>
          <ProfilePicture />
        </div>
      </div>
    </div>
  )
}

export default DesktopNavbar;