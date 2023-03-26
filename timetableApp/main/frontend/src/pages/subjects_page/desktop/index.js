import { CircularProgress, Modal } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Button5 from '../../../common/buttons/Button5'
import TextField from '../../../common/inputs/TextField';
import DesktopNavbar from '../../../common/navbar/DesktopNavbar';
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import Tab from '../../../common/tabs';
import SubjectsContext from '../../../global/contexts/SubjectsContext';
import ThemeContext from '../../../global/contexts/ThemeContext';
import { searchSubjectByQuery } from '../../../utils';
import AddSubject from '../../components/add_subject';
import AddMergedSubjectBox from '../../components/merge_subjects_box';
import NoRecords from '../../components/no_records_found';
import InvoicesHeading from '../../components/PageHeading';
import SubjectsBox from '../../components/subjectsBox';
import { SubjectsApi } from '../../../utils/api_calls';


const SubjectsApiInstance = new SubjectsApi();

const TABS = [
  'All',
  'Optional'
]


function SubjectsDesktop() {
  const [value, setValue] = useState('');
  const Subjects = useContext(SubjectsContext);
  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;
  const { subjectValue, setSubjects } = Subjects;
  const { mergedSubjectsValue, setMergedSubjects } = Subjects;
  const [viewableData, setViewableData] = useState(subjectValue);
  const [loading, setLoading] = useState(true);
  const [addSubjectModal, setAddSubjectModal] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [addMergedSubjectModal, setAddMergedSubjectModal] = useState(false);

  useEffect(() => {
    searchSubjectByQuery(value, subjectValue, setViewableData);
  }, [value]);

  useEffect(() => {
    if (subjectValue.length) setLoading(false)
    if (subjectValue.length) {
      setViewableData(subjectValue)
    }
  }, [subjectValue]);

  const deleteOptionalSubject = (e, id, subjectsToBeAddedBack) => {
    SubjectsApiInstance.deleteMergedSubject(id);
    const filtered = mergedSubjectsValue.filter((item) => {
      if (item._id !== id) return item;
    })

    const curr = subjectValue;
    for (let i = 0; i < subjectsToBeAddedBack.length; i++) {
      curr.push(subjectsToBeAddedBack[i]);
    }
    setSubjects([...curr]);
    setMergedSubjects([...filtered]);
  }

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
            buttonText={activeTab === 'All' ? 'Add subject' : "Create optional"}
            amount={activeTab === 'All' ? viewableData ? viewableData.length : 0 : mergedSubjectsValue ? mergedSubjectsValue.length : 0}
            subHeading='Subjects'
            onClickHandler={() => activeTab === 'All' ? setAddSubjectModal(true) : setAddMergedSubjectModal(true)}
          >{activeTab === 'All' ? "Subjects" : "Optional Subjects"}</InvoicesHeading>
          <div className='mt-[20px]'>
            <TextField
              disabled={activeTab === 'Optional'}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder='Search by course name, code or semester'
            />
          </div>
          <div className='flex w-[300px] mt-[10px] gap-[7.5px]'>
            {TABS.map((tab) => <div
              onClick={() => setActiveTab(tab)}
            >
              <Tab
                key={tab}
                active={activeTab === tab}
              >
                {tab}
              </Tab>
            </div>
            )}
          </div>
          {loading ?
            <div className='w-[100%] h-[85vh] flex items-center justify-center' >
              <CircularProgress />
            </div>
            :
            activeTab === 'All'
              ?
              <div className='h-[79vh]' style={{ overflowY: 'scroll' }}>
                <div className='mt-[25px] grid biggerDesktops:grid-cols-3 desktop:grid-cols-2 gap-[20px]'>
                  {viewableData.map((subject, idx) => {
                    return <div
                      key={subject._id}
                    >
                      <SubjectsBox
                        _id={subject._id}
                        courseCode={subject.courseCode}
                        courseTitle={subject.courseTitle}
                        classSchedulePerWeek={subject.classSchedulePerWeek}
                        courseType={subject.courseType}
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
              :
              mergedSubjectsValue.length ?
                <div className='h-[79vh] ' style={{ overflowY: 'scroll' }}>
                  <div className='mt-[25px] w-[99%] '>

                    {mergedSubjectsValue.map((item) => {
                      return <div className={`flex flex-col mt-[50px] ${themeValue === 'dark' ? "bg-14" : "bg-03"} px-[30px] rounded-[30px] py-[30px] gap-[25px] relative`}>
                        <div className={`text-[24px]  font-bold  ${themeValue !== 'dark' ? "text-[#fff]" : "text-[#000]"}`} style={{ letterSpacing: '-0.25px' }}>
                          {item.mergedSubjects[0].class} {item.mergedSubjects[0].semesterLevel}
                        </div>
                        <div className=' grid biggerDesktops:grid-cols-3 desktop:grid-cols-2 gap-[20px] '>
                          {item.mergedSubjects.map((subject) => {
                            return <SubjectsBox
                              disabled={true}
                              _id={subject._id}
                              courseCode={subject.courseCode}
                              courseTitle={subject.courseTitle}
                              classSchedulePerWeek={subject.classSchedulePerWeek}
                              courseType={subject.courseType}
                              className={subject.class}
                              branch={subject.branch}
                              credits={subject.credits}
                              semesterLevel={subject.semesterLevel}
                              status={subject.status}
                              setViewableData={setSubjects}
                              viewableData={subjectValue}
                              taughtBy={subject.taughtBy}
                            />
                          })}
                        </div>
                        <div className='absolute right-[55px] top-[20px]'

                        >
                          <Button5
                            onClick={(e) => deleteOptionalSubject(e, item._id, item.mergedSubjects)}
                          >Delete</Button5>
                        </div>
                      </div>
                    })}
                  </div>
                </div>
                : <>
                  <NoRecords
                    mainHeading={activeTab === 'All' ? 'No records found' : 'No optional subjects created'}
                    subHeading={activeTab === 'All' ? 'Add subjects for them to show up here' : 'Create an optional subject for them to appear here'}
                  />
                </>

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

        <Modal open={addMergedSubjectModal}>
          <div>
            <AddMergedSubjectBox closeModal={(e) => {
              e.stopPropagation()
              setAddMergedSubjectModal(false)
            }}

            />
          </div>
        </Modal>

      </div>
    </div>
  )
}

export default SubjectsDesktop;