import { Modal } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';

import DesktopNavbar from '../../../common/navbar/DesktopNavbar';
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import TeachersContext from '../../../global/contexts/TeachersContext';


import { TeachersApi } from '../../../utils/api_calls';
import AddTeacher from '../../components/add_teacher';
import PageHeading from '../../components/PageHeading';
import TeachersBox from '../../components/teachers_box';


const TeachersApiInstance = new TeachersApi();

function TeachersDesktop() {

  const Teachers = useContext(TeachersContext);
  const { teachersValue } = Teachers;
  const [viewableData, setViewableData] = useState(teachersValue);
  const [addTeacherModal, setAddTeacherModal] = useState(false);

  const deleteHandler = (id) => {
    const filtered = teachersValue.filter((item) => {
      return item._id !== id;
    })
    setViewableData([...filtered]);
    TeachersApiInstance.deleteTeacher(id);
  }

  useEffect(() => {
    if (teachersValue.length) {
      setViewableData(teachersValue)
    }
  }, [teachersValue]);

  
  return (
    <div className='relative flex justify-center item-center flex-col'>
      <div className='desktop-navbar absolute left-[0px] h-[100%]'>
        <DesktopNavbar />
      </div>

      <div className='mobile-navbar w-[100%]'>
        <MobileNavbar />
      </div>

      <div className='flex items-center justify-center flex flex-col mt-[25px]'>
        <div className='desktop:w-[630px] biggerDesktops:w-[940px] justify-between'>
          <PageHeading
            buttonText={'Add teacher'}
            amount={viewableData ? viewableData.length : 0}
            subHeading={'Teachers'}
            onClickHandler={() => setAddTeacherModal(true)}
          >
            Teachers
          </PageHeading>
        </div>
        <div className='h-[85vh]' style={{ overflowY: 'scroll' }}>
          <div className='mt-[25px] grid biggerDesktops:grid-cols-4 desktop:grid-cols-3 gap-[20px] '>
            {viewableData.map((item, idx) => {
              return <div
                key={item._id}
              >
                <TeachersBox
                  id={item._id}
                  teacherName={item.teacherName}
                  teacherInitials={item.teacherInitials}
                  deleteHandler={deleteHandler}
                />
              </div>
            })}
          </div>
        </div>
        <Modal open={addTeacherModal}>
          <div>
            <AddTeacher closeModal={(e) => {
              e.stopPropagation()
              setAddTeacherModal(false)
            }}
              viewableData={viewableData}
              setViewableData={setViewableData}
            />
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default TeachersDesktop;