import React, { useContext, useEffect, useReducer, useState } from 'react'
import generateTimetable from 'timetablegeneratorpackage';
import Checkbox from '../../../common/inputs/Checkbox';
import Text15px from '../../../common/text/Text15px';
import Text24px from '../../../common/text/Text24px';
import RoomsContext from '../../../global/contexts/RoomsContext';
import SubjectsContext from '../../../global/contexts/SubjectsContext';
import { generateInputForTimetable } from '../../../utils';
import { downloadAsAttachment } from '../../../utils/apiCalls';
// import jsonToExcel from '../../../utils/jsonToExcel';
import { Link, useHref, useNavigate } from 'react-router-dom';

import Table from '../Table';
import Button2 from '../../../common/buttons/Button2';
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import config from '../../../setup/config';

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

function TimetableDesktop() {
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
            setHasErrors(false)
        } catch (error) {
            setHasErrors(error);
        }

    }, [inputArrState, roomsValue, subjectValue])

    const clickHandler = () => {
        const res = generateTimetable(inputArrState, roomsValue, subjectValue, false);
        downloadAsAttachment(res);
    }

    return (
        <div className='flex items-center flex-col justify-center h-[100vh] '>
            <div className='desktop-navbar w-[100vw] h-[100%]'>
                <MobileNavbar />
            </div>
            <div className='desktop:w-[900px] biggerDesktops:w-[1200px] gap-[30px] flex flex-col justify-between'>
                <div className='flex justify-between items-center w-[100%]'>
                    <div className='flex flex-col'>
                        <Text24px>Timetable</Text24px>
                        <Text15px>Generate timetable for : </Text15px>
                    </div>
                    <div className='flex gap-[30px]'>
                        <Link to={`${config.BACKEND_URL}/timetable-excel?rowspan=${inputArrState.length}`}>
                            <Button2>Download XLSL</Button2>
                        </Link>
                        <Button2 onClick={clickHandler}>Load Data</Button2>
                    </div>

                </div>
                <div className='flex gap-[100px]'>
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

                <div className='w-[100%] h-[65vh] overflow-scroll '>
                    {hasErrors ?
                        <>
                            <h1 className='text-[40px] text-09'>{hasErrors.type}</h1>
                            <h3 className={'text-09'}>{hasErrors.message}</h3>
                        </>
                        :
                        data && <Table data={data} />

                    }
                </div>

            </div>

        </div>
    )
}

export default TimetableDesktop;