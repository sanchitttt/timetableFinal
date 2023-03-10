import { CircularProgress, Modal, Skeleton } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import TextField from '../../../common/inputs/TextField';
import DesktopNavbar from '../../../common/navbar/DesktopNavbar';
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import SubjectsContext from '../../../global/contexts/SubjectsContext';
import { searchSubjectByQuery } from '../../../utils';
import AddSubject from '../../components/add_subject';
import NoRecords from '../../components/no_records_found';
import InvoicesHeading from '../../components/PageHeading';
import SubjectsBox from '../../components/subjectsBox';


function SubjectsDesktop() {
  const [value, setValue] = useState('');
  const Subjects = useContext(SubjectsContext);
  const { subjectValue, setSubjects } = Subjects;
  const [viewableData, setViewableData] = useState(subjectValue);
  const [loading, setLoading] = useState(true);
  const [addSubjectModal, setAddSubjectModal] = useState(false);

  useEffect(() => {
    searchSubjectByQuery(value, subjectValue, setViewableData);
  }, [value]);

  useEffect(() => {
    if (subjectValue.length) setLoading(false)
    if (subjectValue.length) {
      setViewableData(subjectValue)
    }
  }, [subjectValue])
  
  return (
    <div className='relative flex justify-center item-center flex-col'>
      <div className='desktop-navbar absolute left-[0px] h-[100%]'>
        <DesktopNavbar />
      </div>

      <div className='mobile-navbar w-[100%]'>
        <MobileNavbar />
      </div>

      <div className='flex items-center justify-center flex flex-col mt-[25px]'>
        <div className='desktop:w-[730px] biggerDesktops:w-[1000px] justify-between'>
          <InvoicesHeading
            buttonText='Add subject'
            amount={viewableData ? viewableData.length : 0}
            subHeading='Subjects'
            onClickHandler={() => setAddSubjectModal(true)}
          >Subjects</InvoicesHeading>
          <div className='mt-[20px]'>
            <TextField
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder='Search by course name, code or semester'
            />
          </div>
          {loading ?
            <div className='w-[100%] h-[85vh] flex items-center justify-center' >
              <CircularProgress />
            </div>
            :
            <div className='h-[85vh]' style={{ overflowY: 'scroll' }}>
              <div className='mt-[25px] grid biggerDesktops:grid-cols-3 desktop:grid-cols-2 gap-[20px]'>
                {viewableData.map((subject, idx) => {
                  return <div
                    key={subject.id}
                  >
                    <SubjectsBox
                      _id={subject._id}
                      courseCode={subject.courseCode}
                      courseTitle={subject.courseTitle}
                      classSchedulePerWeek={subject.classSchedulePerWeek}
                      className={subject.class}
                      branch={subject.branch}
                      credits={subject.credits}
                      semesterLevel={subject.semesterLevel}
                      status={subject.status}
                      setViewableData={setSubjects}
                      viewableData={subjectValue}
                      taughtBy={subject.taughtBy}
                    />
                  </div>
                })}
              </div>
            </div>

          }
          {subjectValue.length === 0 && !loading && <NoRecords
            mainHeading={'No records found'}
            subHeading={'Add subjects for them to show up here'}
          />}
        </div>

        <Modal open={addSubjectModal}>
          <div>
            <AddSubject closeModal={(e) => {
              e.stopPropagation()
              setAddSubjectModal(false)
            }}

            />
          </div>
        </Modal>

      </div>
    </div>
  )
}

export default SubjectsDesktop;