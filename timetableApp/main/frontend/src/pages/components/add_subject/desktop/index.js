import React, { useContext, useState } from 'react'
import ThemeContext from '../../../../global/contexts/ThemeContext';
import TextField from "../../../../common/inputs/TextField";
import Select from "../../../../common/inputs/Select";
import SelectItem from "../../../../common/inputs/SelectItem";
import Text24px from '../../../../common/text/Text24px';
import Button4 from '../../../../common/buttons/Button4';
import Button2 from '../../../../common/buttons/Button2';
import { SubjectsApi } from '../../../../utils/api_calls';

const SubjectsApiInstance = new SubjectsApi();

function AddSubjectDesktop({ closeModal }) {
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
    SubjectsApiInstance.addNewSubject({
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
    <div style={{ transform: 'translate(-50%,-50%)' }} className={`absolute left-[50%] top-[50%] rounded-[8px] h-[800px] flex flex-col justify-start gap-[30px] w-[616px] bg-03 px-[30px] ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"}`}>
      <div className='mt-[30px]'>
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
      <div className='flex justify-between'>
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
      </div>

      <div className='flex justify-between'>
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
      <div className='flex items-center justify-end gap-[15px]'>
        <Button4 onClick={closeModal}>Cancel</Button4>
        <Button2
          onClick={createHandler}
        >Create</Button2>
      </div>
    </div>
  )
}

export default AddSubjectDesktop;