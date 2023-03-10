import React, { useContext, useState } from 'react'
import ThemeContext from '../../../../global/contexts/ThemeContext';
import TextField from "../../../../common/inputs/TextField";
import Select from "../../../../common/inputs/Select";
import SelectItem from "../../../../common/inputs/SelectItem";
import Text24px from '../../../../common/text/Text24px';
import Button4 from '../../../../common/buttons/Button4';
import Button2 from '../../../../common/buttons/Button2';
import { addNewSubject } from '../../../../utils/apiCalls';

function AddSubjectMobile({ closeModal }) {
  const [subjectTitleState, setSubjectTitleState] = useState('');
  const [subjectCodeState, setSubjectCodeState] = useState('');
  const [classesPerWeek, setClassesPerWeek] = useState('');
  const [classNameState, setClassNameState] = useState('');
  const [semesterLevelState, setSemesterLevelState] = useState('');
  const [branchState, setBranchState] = useState('');
  const [statusState, setStatusState] = useState('');

  const Theme = useContext(ThemeContext);
  const { themeValue } = Theme;

  const createHandler = (event) => {
    addNewSubject({
      courseTitle: subjectTitleState,
      courseCode: subjectCodeState,
      classSchedulePerWeek: classesPerWeek,
      className: classNameState,
      semesterLevel: semesterLevelState,
      branch: branchState,
      status: statusState
    }
    )
    closeModal(event);
  }


  return (
    <div className={`w-[100%] flex flex-col gap-[5px] h-[100vh] px-[20px] ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"} overflow-scroll`}>
      <div className='w-[90%] flex flex-col gap-[25px]'>


        <div className='w-[100%]'>
          <Text24px>Add Subject</Text24px>
        </div>
        <div>
          <TextField
            label='Subject Title'
            value={subjectTitleState}
            onChange={(e) => setSubjectTitleState(e.target.value)}
            placeholder={'Ex : Distributed Computing'}
            required
          />
        </div>

        <div>
          <TextField
            label={'Subject code'}
            value={subjectCodeState}
            onChange={(e) => setSubjectCodeState(e.target.value)}
            placeholder={'Ex : CA101'}
            required
          />
        </div>

        <div>
          <TextField
            label={'Classes Per Week'}
            value={classesPerWeek}
            onChange={(e) => setClassesPerWeek(e.target.value)}
            placeholder={'Ex : 04'}
            required
          />
        </div>

          <div>
            <TextField
              value={classNameState}
              onChange={(e) => setClassNameState(e.target.value)}
              label={'Class'}
              placeholder={'Ex : BCA'}
              required
            />
            {/* {classNameState.length === 0 && <ErrorLabel>Class cant be empty</ErrorLabel>} */}
          </div>
          <div>
            <TextField
              value={semesterLevelState}
              onChange={(e) => setSemesterLevelState(e.target.value)}
              label={'Semester / Level'}
              placeholder={'Ex : II/2'}
              required
            />
            {/* {semesterLevelState.length === 0 && <ErrorLabel>Semester level cant be empty</ErrorLabel>} */}
          </div>

        <Select
          value={statusState}
          onChange={(e) => setStatusState(e.target.value)}
          label={'Status'}
        >
          <SelectItem value='active' />
          <SelectItem value='inactive' />
        </Select>
        <div>
          <TextField
            value={branchState}
            onChange={(e) => setBranchState(e.target.value)}
            label={'Branch'}
            placeholder={"Ex : Bachelor in Computer Applications"}
            required
          />
          {/* {branchState.length === 0 && <ErrorLabel>Branch cant be empty</ErrorLabel>} */}
        </div>
        <div className='flex items-center justify-center gap-[10px] mt-[15px]'>
          <Button4 onClick={closeModal}>Cancel</Button4>
          <Button2
            onClick={createHandler}
          >Create</Button2>
        </div>
      </div>
    </div>
  )
}

export default AddSubjectMobile;