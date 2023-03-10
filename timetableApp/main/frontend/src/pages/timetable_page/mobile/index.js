import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom';
import generateTimetable from 'timetablegeneratorpackage';
import Button2 from '../../../common/buttons/Button2';
import Checkbox from '../../../common/inputs/Checkbox';
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import Text15px from '../../../common/text/Text15px';
import Text24px from '../../../common/text/Text24px';
import RoomsContext from '../../../global/contexts/RoomsContext';
import SubjectsContext from '../../../global/contexts/SubjectsContext';
import { generateInputForTimetable } from '../../../utils';
import { downloadAsAttachment } from '../../../utils/apiCalls';
import Table from '../Table';

const inputArr = [
  ['bca', 'II'],
  ['bca', 'IV'],
  ['bca', 'VI'],
  ['mca', 'II'],
  ['mca', 'IV'],
]

const initialState = {
  bca1: false,
  bca2: true,
  bca3: false,
  bca4: true,
  bca5: false,
  bca6: true,
  mca1: false,
  mca2: true,
  mca3: false,
  mca4: true,
  bba1: false,
  bba2: true,
  bba3: false,
  bba4: true,
  bba5: false,
  bba6: true,
  mba1: false,
  mba2: false,
  mba3: false,
  mba4: false,
}
const reducerFn = (state, action) => {
  switch (action.type) {
    case 'bca1':
      return { ...state, bca1: action.value }
    case 'bca2':
      return { ...state, bca2: action.value }
    case 'bca3':
      return { ...state, bca3: action.value }
    case 'bca4':
      return { ...state, bca4: action.value }
    case 'bca5':
      return { ...state, bca5: action.value }
    case 'bca6':
      return { ...state, bca6: action.value }
    case 'mca1':
      return { ...state, mca1: action.value }
    case 'mca2':
      return { ...state, mca2: action.value }
    case 'mca3':
      return { ...state, mca3: action.value }
    case 'mca4':
      return { ...state, mca4: action.value }
    case 'bba1':
      return { ...state, bba1: action.value }
    case 'bba2':
      return { ...state, bba2: action.value }
    case 'bba3':
      return { ...state, bba3: action.value }
    case 'bba4':
      return { ...state, bba4: action.value }
    case 'bba5':
      return { ...state, bba5: action.value }
    case 'bba6':
      return { ...state, bba6: action.value }
    case 'mba1':
      return { ...state, mba1: action.value }
    case 'mba2':
      return { ...state, mba2: action.value }
    case 'mba3':
      return { ...state, mba3: action.value }
    case 'mba4':
      return { ...state, mba4: action.value }
    default:
      return state;
  }
}

function TimetableMobile() {
  const [data, setData] = useState();
  const Rooms = useContext(RoomsContext);
  const Subjects = useContext(SubjectsContext);
  const [hasErrors, setHasErrors] = useState(false);
  const [markedSubjects, dispatch] = useReducer(reducerFn, initialState);
  const [inputArrState, setInputArrState] = useState(inputArr);

  const { roomsValue } = Rooms;
  const { subjectValue } = Subjects;

  useEffect(() => {
    const res = generateInputForTimetable(markedSubjects);
    setInputArrState(res);
  }, [markedSubjects]);


  useEffect(() => {
    try {
      let res = generateTimetable(inputArrState, roomsValue, subjectValue, true);
      setData(res)
      setHasErrors(false);
    } catch (error) {
      setHasErrors(true);
    }
  }, [inputArrState, roomsValue, subjectValue])

  const clickHandler = () => {
    const res = generateTimetable(inputArrState, roomsValue, subjectValue, false);
    downloadAsAttachment(res);
  }


  return (
    <div>
      <div className=' w-[100vw] mb-[20px]'>
        <MobileNavbar />
      </div>
      <div className='flex items-center justify-center flex-col'>
        <Text24px>Timetable</Text24px>

        <div className='flex gap-[30px]'>
          <Link to={`http://localhost:8082/timetable-excel?rowspan=${inputArrState.length}`}>
            <Button2>Download XLSL</Button2>
          </Link>
          <Button2 onClick={clickHandler}>Load Data</Button2>
        </div>
        <div className='flex gap-[50px] mt-[20px]'>
          <div className='flex flex-col'>
            <h1>BCA</h1>
            <Checkbox label='I' value={markedSubjects.bca1} onChange={(e) => dispatch({ type: 'bca1', value: e.target.checked })} />
            <Checkbox label='II' value={markedSubjects.bca2} onChange={(e) => dispatch({ type: 'bca2', value: e.target.checked })} />
            <Checkbox label='III' value={markedSubjects.bca3} onChange={(e) => dispatch({ type: 'bca3', value: e.target.checked })} />
            <Checkbox label='IV' value={markedSubjects.bca4} onChange={(e) => dispatch({ type: 'bca4', value: e.target.checked })} />
            <Checkbox label='V' value={markedSubjects.bca5} onChange={(e) => dispatch({ type: 'bca5', value: e.target.checked })} />
            <Checkbox label='VI' value={markedSubjects.bca6} onChange={(e) => dispatch({ type: 'bca6', value: e.target.checked })} />
          </div>

          <div className='flex flex-col'>
            <h1>MCA</h1>
            <Checkbox label='I' value={markedSubjects.mca1} onChange={(e) => dispatch({ type: 'mca1', value: e.target.checked })} />
            <Checkbox label='II' value={markedSubjects.mca2} onChange={(e) => dispatch({ type: 'mca2', value: e.target.checked })} />
            <Checkbox label='III' value={markedSubjects.mca3} onChange={(e) => dispatch({ type: 'mca3', value: e.target.checked })} />
            <Checkbox label='IV' value={markedSubjects.mca4} onChange={(e) => dispatch({ type: 'mca4', value: e.target.checked })} />
          </div>
          <div className='flex flex-col'>
            <h1>BBA</h1>
            <Checkbox label='I' value={markedSubjects.bba1} onChange={(e) => dispatch({ type: 'bba1', value: e.target.checked })} />
            <Checkbox label='II' value={markedSubjects.bba2} onChange={(e) => dispatch({ type: 'bba2', value: e.target.checked })} />
            <Checkbox label='III' value={markedSubjects.bba3} onChange={(e) => dispatch({ type: 'bba3', value: e.target.checked })} />
            <Checkbox label='IV' value={markedSubjects.bba4} onChange={(e) => dispatch({ type: 'bba4', value: e.target.checked })} />
            <Checkbox label='V' value={markedSubjects.bba5} onChange={(e) => dispatch({ type: 'bba5', value: e.target.checked })} />
            <Checkbox label='VI' value={markedSubjects.bba6} onChange={(e) => dispatch({ type: 'bba6', value: e.target.checked })} />
          </div>
          <div className='flex flex-col'>
            <h1>MBA</h1>
            <Checkbox label='I' value={markedSubjects.mba1} onChange={(e) => dispatch({ type: 'mba1', value: e.target.checked })} />
            <Checkbox label='II' value={markedSubjects.mba2} onChange={(e) => dispatch({ type: 'mba2', value: e.target.checked })} />
            <Checkbox label='III' value={markedSubjects.mba3} onChange={(e) => dispatch({ type: 'mba3', value: e.target.checked })} />
            <Checkbox label='IV' value={markedSubjects.mba4} onChange={(e) => dispatch({ type: 'mba4', value: e.target.checked })} />
          </div>
        </div>

        <div style={{ textAlign: 'center' }} className='w-[100%] mt-[50px] flex items-center justify-center align-center w-[80%] h-[100%] overflow-scroll '>
         <Text24px>Please use a desktop screen or tablet for viewing the timetable</Text24px>
          {/* {data && <Table data={data} />} */}
        </div>
      </div>

    </div>
  )
}

export default TimetableMobile;