import React, { useContext, useState } from 'react'
import Button2 from '../../../../common/buttons/Button2';
import Button4 from '../../../../common/buttons/Button4';
import ErrorLabel from '../../../../common/inputs/ErrorLabel';
import Select from '../../../../common/inputs/Select';
import SelectItem from '../../../../common/inputs/SelectItem';
import TextField from '../../../../common/inputs/TextField';
import TeachersContext from '../../../../global/contexts/TeachersContext';
import ThemeContext from '../../../../global/contexts/ThemeContext';
import { saveChangesToSubjects } from '../../../../utils';
import EditSubjectHeading from '../EditSubjectHeading';

function EditSubjectBoxMobile({ _id, subjectTitle, subjectCode, scheduledClassesPerWeek, className, semesterLevel, branch, closeModal, setViewableData, status, viewableData, taughtBy }) {
  const [subjectTitleState, setSubjectTitleState] = useState(subjectTitle);
  const [subjectCodeState, setSubjectCodeState] = useState(subjectCode);
  const [classesPerWeek, setClassesPerWeek] = useState(scheduledClassesPerWeek);
  const [classNameState, setClassNameState] = useState(className ? className : '');
  const [semesterLevelState, setSemesterLevelState] = useState(semesterLevel);
  const [branchState, setBranchState] = useState(branch);
  const [statusState, setStatusState] = useState(status);
  const [taughtByState, setTaughtByState] = useState(taughtBy);

  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;

  const Teachers = useContext(TeachersContext);
  const { teachersValue } = Teachers;

  const saveHandler = (event) => {
    saveChangesToSubjects({
      _id: _id,
      courseTitle: subjectTitleState,
      courseCode: subjectCodeState,
      classSchedulePerWeek: classesPerWeek,
      className: className,
      semesterLevel: semesterLevelState,
      branch: branchState,
      status: statusState,
      taughtBy: taughtByState
    }, viewableData, setViewableData, closeModal, event
    )
  }

  return (
    <div className={`w-[100%] flex flex-col gap-[25px] h-[100vh] px-[20px] ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"} overflow-scroll`}>
      <div className='w-[100%]'>
        <EditSubjectHeading>{subjectCode} - {subjectTitle} </EditSubjectHeading>
      </div>
      <div className=''>
        <TextField
          label='Subject Title'
          value={subjectTitleState}
          onChange={(e) => setSubjectTitleState(e.target.value)}
          placeholder={subjectTitle}
          required
        />
        {subjectTitleState.length === 0 && <ErrorLabel>Subject title cant be empty</ErrorLabel>}
      </div>
      <div className='flex justify-between'>
        <div className='w-[45%]'>
          <TextField
            label={'Subject code'}
            value={subjectCodeState}
            onChange={(e) => setSubjectCodeState(e.target.value)}
            placeholder={subjectCode}
            required
          />
          {subjectCodeState.length === 0 && <ErrorLabel>Subject code cant be empty</ErrorLabel>}
        </div>

        <div className='w-[45%]'>
          <TextField
            label={'Classes Per Week'}
            value={classesPerWeek}
            onChange={(e) => setClassesPerWeek(e.target.value)}
            placeholder={scheduledClassesPerWeek}
            required
          />
          {classesPerWeek.length === 0 && <ErrorLabel>Classes per week cant be empty</ErrorLabel>}
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='w-[45%]'>
          <TextField
            value={classNameState}
            onChange={(e) => setClassNameState(e.target.value)}
            label={'Class'}
            placeholder={className}
            required
          />
          {classNameState.length === 0 && <ErrorLabel>Class cant be empty</ErrorLabel>}
        </div>
        <div className='w-[45%]'>
          <TextField
            value={semesterLevelState}
            onChange={(e) => setSemesterLevelState(e.target.value)}
            label={'Semester / Level'}
            placeholder={semesterLevel}
            required
          />
          {semesterLevelState.length === 0 && <ErrorLabel>Semester level cant be empty</ErrorLabel>}
        </div>
      </div>
      <Select
        value={statusState}
        onChange={(e) => setStatusState(e.target.value)}
        label={'Status'}
      >
        <SelectItem value='active' />
        <SelectItem value='inactive' />
      </Select>

      <Select
        value={taughtByState ? taughtByState : 'None'}
        onChange={(e) => setTaughtByState(e.target.value)}
        label={'Taught By'}
      >
        {teachersValue.map((item) => {
          return <SelectItem value={item.teacherInitials} />
        })}

      </Select>

      <div>
        <TextField
          value={branchState}
          onChange={(e) => setBranchState(e.target.value)}
          label={'Branch'}
          placeholder={branch}
          required
        />
        {branchState.length === 0 && <ErrorLabel>Branch cant be empty</ErrorLabel>}
      </div>


      <div className='flex items-center justify-end gap-[15px]'>
        <Button4 onClick={closeModal}>Cancel</Button4>
        <Button2
          onClick={saveHandler}
        >Save</Button2>
      </div>
    </div>
  )
}

export default EditSubjectBoxMobile;