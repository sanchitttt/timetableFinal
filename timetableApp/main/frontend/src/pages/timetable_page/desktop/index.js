import React, { useContext, useEffect, useReducer, useState } from 'react'
import generateTimetable from 'timetablegeneratorpackage';
import Checkbox from '../../../common/inputs/Checkbox';
import Text15px from '../../../common/text/Text15px';
import Text24px from '../../../common/text/Text24px';
import RoomsContext from '../../../global/contexts/RoomsContext';
import SubjectsContext from '../../../global/contexts/SubjectsContext';
import { generateInputForTimetable } from '../../../utils';
import { Link } from 'react-router-dom';
import Button2 from '../../../common/buttons/Button2';
import config from '../../../setup/config';
import DesktopNavbar from '../../../common/navbar/DesktopNavbar';
import TimetablePreferenceContext from '../../../global/contexts/TimetablePreferenceContext';
import { TimetableApi } from '../../../utils/api_calls';
import Timetable from '../Timetable';
import ThemeContext from '../../../global/contexts/ThemeContext';
import { motion } from 'framer-motion';
import TimetableIcon from '../../../common/TimetableIcon';
import CreateTimetableIcon from '../../../common/CreateTimetableIcon';

const TimetableApiInstance = new TimetableApi();

const initialState = {
    bca1: false,
    bca2: false,
    bca3: false,
    bca4: false,
    bca5: false,
    bca6: false,
    mca1: false,
    mca2: false,
    mca3: false,
    mca4: false,
    bba1: false,
    bba2: false,
    bba3: false,
    bba4: false,
    bba5: false,
    bba6: false,
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
    const Rooms = useContext(RoomsContext);
    const Subjects = useContext(SubjectsContext);
    const Preferences = useContext(TimetablePreferenceContext)
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;

    const { roomsValue } = Rooms;
    const { subjectValue, mergedSubjectsValue } = Subjects;
    const { timetablePreferencesValue } = Preferences;

    const [data, setData] = useState();
    const [hasErrors, setHasErrors] = useState(false);
    const [markedSubjects, dispatch] = useReducer(reducerFn, initialState);
    const [inputArrState, setInputArrState] = useState([]);
    const [preferencesState, setPreferencesState] = useState([]);
    const [hasGenerated, setHasGenerated] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);


    const showTimetableHandler = () => {
        try {
            if (hasGenerated) {
                window.alert('Please reload the page for generating the timetable again');
            }
            else if (!inputArrState.length) {
                window.alert('Check atleast one checkbox')
            }
            else {
                let res = generateTimetable(inputArrState, roomsValue, [...subjectValue, ...mergedSubjectsValue], preferencesState, true);

                setData(res)
                setHasErrors(false)
                setHasGenerated(true);
            }
        } catch (error) {
            setHasErrors(error);
        }
    }

    useEffect(() => {
        if (timetablePreferencesValue) {
            const iterator1 = timetablePreferencesValue[Symbol.iterator]();
            const result = [];
            for (const item of iterator1) {
                result.push(item[1]);
            }
            setPreferencesState([...result]);
        }

    }, [timetablePreferencesValue]);


    useEffect(() => {
        const res = generateInputForTimetable(markedSubjects);

        setInputArrState(res);
    }, [markedSubjects]);

    useEffect(() => {
        try {
            let res;
            if (mergedSubjectsValue && subjectValue) {
                res = generateTimetable(inputArrState, roomsValue, [...subjectValue, ...mergedSubjectsValue], preferencesState, true);
                setData(res)
                setHasErrors(false)
            }

        } catch (error) {
            console.log(error)
            setHasErrors(error);
        }
    }, [subjectValue])

    const clickHandler = () => {
        if (!inputArrState.length) {
            window.alert('Check atleast one checkbox')
        }
        else if (!hasGenerated) {
            window.alert('Generate preview first');
        }
        else {
            setHasLoaded(true);
            const res = generateTimetable(inputArrState, roomsValue, [...subjectValue, ...mergedSubjectsValue], preferencesState, false);
            TimetableApiInstance.postTimetable(res);
        }

    }

    const downloadHandler = () => {
        if (!inputArrState.length) {
            window.alert('Check atleast one checkbox');
        }
        else if (!hasGenerated) {
            window.alert('Click on show preview first');
        }
        else if (!hasLoaded) {
            window.alert('Load the data first');
        }
        else if (hasGenerated) {
            window.alert('Reload the page for generating a new timetable')
        }
    }

    return (
        <div className='flex gap-[20px]'>
            <div className='h-[100%]'>
                <DesktopNavbar />
            </div>
            <div className='flex items-center w-[100%] mx-[5%] flex-col justify-center h-[100vh] '>
                <div className='w-[100%] flex flex-col justify-between'>
                    <div className='flex justify-between items-center w-[100%]'>
                        <motion.div className='flex flex-col'
                            initial={{ opacity: 0, x: -75 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: '0.3' }}
                        >
                            <Text24px>Timetable</Text24px>
                            <Text15px>Generate timetable for : </Text15px>
                        </motion.div>
                        <motion.div className='flex gap-[30px]'
                            initial={{ opacity: 0, x: 75 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: '0.3' }}
                        >
                            <Link to={hasLoaded && `${config.BACKEND_URL}/timetable-excel?rowspan=${inputArrState.length}`}>
                                <Button2
                                    onClick={downloadHandler}
                                    disabled={!hasLoaded}
                                >Download XLSL</Button2>
                            </Link>
                            <Button2 disabled={!hasGenerated} onClick={clickHandler}>Load Data</Button2>
                            <Button2 onClick={showTimetableHandler}>Show Preview</Button2>
                        </motion.div>

                    </div>
                    <motion.div className='flex gap-[100px]'
                        initial={{ opacity: 0, x: -75 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: '0.3' }}
                    >
                        <div className='flex flex-col'>
                            <h1 className={`${themeValue === 'dark' ? 'text-[#fff]' : 'text-[#000]'}`}>BCA</h1>
                            <Checkbox label='I' value={markedSubjects.bca1} onChange={(e) => dispatch({ type: 'bca1', value: e.target.checked })} />
                            <Checkbox label='II' value={markedSubjects.bca2} onChange={(e) => dispatch({ type: 'bca2', value: e.target.checked })} />
                            <Checkbox label='III' value={markedSubjects.bca3} onChange={(e) => dispatch({ type: 'bca3', value: e.target.checked })} />
                            <Checkbox label='IV' value={markedSubjects.bca4} onChange={(e) => dispatch({ type: 'bca4', value: e.target.checked })} />
                            <Checkbox label='V' value={markedSubjects.bca5} onChange={(e) => dispatch({ type: 'bca5', value: e.target.checked })} />
                            <Checkbox label='VI' value={markedSubjects.bca6} onChange={(e) => dispatch({ type: 'bca6', value: e.target.checked })} />
                        </div>

                        <div className='flex flex-col'>
                            <h1 className={`${themeValue === 'dark' ? 'text-[#fff]' : 'text-[#000]'}`}>MCA</h1>
                            <Checkbox label='I' value={markedSubjects.mca1} onChange={(e) => dispatch({ type: 'mca1', value: e.target.checked })} />
                            <Checkbox label='II' value={markedSubjects.mca2} onChange={(e) => dispatch({ type: 'mca2', value: e.target.checked })} />
                            <Checkbox label='III' value={markedSubjects.mca3} onChange={(e) => dispatch({ type: 'mca3', value: e.target.checked })} />
                            <Checkbox label='IV' value={markedSubjects.mca4} onChange={(e) => dispatch({ type: 'mca4', value: e.target.checked })} />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className={`${themeValue === 'dark' ? 'text-[#fff]' : 'text-[#000]'}`}>BBA</h1>
                            <Checkbox label='I' value={markedSubjects.bba1} onChange={(e) => dispatch({ type: 'bba1', value: e.target.checked })} />
                            <Checkbox label='II' value={markedSubjects.bba2} onChange={(e) => dispatch({ type: 'bba2', value: e.target.checked })} />
                            <Checkbox label='III' value={markedSubjects.bba3} onChange={(e) => dispatch({ type: 'bba3', value: e.target.checked })} />
                            <Checkbox label='IV' value={markedSubjects.bba4} onChange={(e) => dispatch({ type: 'bba4', value: e.target.checked })} />
                            <Checkbox label='V' value={markedSubjects.bba5} onChange={(e) => dispatch({ type: 'bba5', value: e.target.checked })} />
                            <Checkbox label='VI' value={markedSubjects.bba6} onChange={(e) => dispatch({ type: 'bba6', value: e.target.checked })} />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className={`${themeValue === 'dark' ? 'text-[#fff]' : 'text-[#000]'}`}>MBA</h1>
                            <Checkbox label='I' value={markedSubjects.mba1} onChange={(e) => dispatch({ type: 'mba1', value: e.target.checked })} />
                            <Checkbox label='II' value={markedSubjects.mba2} onChange={(e) => dispatch({ type: 'mba2', value: e.target.checked })} />
                            <Checkbox label='III' value={markedSubjects.mba3} onChange={(e) => dispatch({ type: 'mba3', value: e.target.checked })} />
                            <Checkbox label='IV' value={markedSubjects.mba4} onChange={(e) => dispatch({ type: 'mba4', value: e.target.checked })} />
                        </div>
                    </motion.div>

                    <div className='mt-[20px] w-[100%] h-[65vh] flex items-center justify-center'>
                        {!hasGenerated &&
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: '0.3' }}
                                className='flex flex-col gap-[30px] flex items-center justify-center'
                            >
                                <CreateTimetableIcon />
                                <h1 className={`${themeValue === 'dark' ? 'text-[#fff]' : 'text-[#000]'}`}>Generate a timetable for it to preview here</h1>
                            </motion.div>}
                        {hasErrors ?
                            <>
                                <h1 className='text-[40px] text-09'>{hasErrors.type}</h1>
                                <h3 className={'text-09'}>{hasErrors.message}</h3>
                            </>
                            :
                            data && <Timetable data={data} rowSpanLength={inputArrState.length} />
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default TimetableDesktop;
