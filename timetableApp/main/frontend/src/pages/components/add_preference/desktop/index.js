import React, { useContext, useEffect, useState } from 'react'
import Button2 from '../../../../common/buttons/Button2';
import Button4 from '../../../../common/buttons/Button4';
import Select from '../../../../common/inputs/Select';
import SelectItem from '../../../../common/inputs/SelectItem';
import Text24px from '../../../../common/text/Text24px';
import SubjectsContext from '../../../../global/contexts/SubjectsContext';
import ThemeContext from '../../../../global/contexts/ThemeContext';
import ErrorLabel from '../../../../common/inputs/ErrorLabel';
import { addPreference } from '../../../../utils/apiCalls';
import TimetablePreferenceContext from '../../../../global/contexts/TimetablePreferenceContext';

const branches = ['BCA', 'MCA', 'BBA', 'MBA'];

const threeYearSemesters = [
    'I/1',
    'II/1',
    'III/2',
    'IV/2',
    'V/3',
    'VI/3'
]

const twoYearSemesters = [
    'I/1',
    'II/1',
    'III/2',
    'IV/2'
];

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

const periods = [
    'Period 1',
    'Period 2',
    'Period 3',
    'Period 4',
    'Period 5',
    'Period 6',
    'Period 7'
]

const mergeSubjectsIntoOne = (arr) => {
    const arrCopy = structuredClone(arr);
    const finalObj = arrCopy[0];
    for (let i = 1; i < arrCopy.length; i++) {
        const keys = Object.keys(arrCopy[i]);
        keys.forEach((key) => {
            finalObj[key] += ',' + arrCopy[i][key];
        })
    }
    return finalObj;
}

function AddPreferenceDesktop({ closeModal }) {
    const [branch, setBranch] = useState('None')
    const [semester, setSemester] = useState('None');
    const [subjectType, setSubjectType] = useState('None');
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('None');
    const [selectedDay, setSelectedDay] = useState('None');
    const [selectedPeriod, setSelectedPeriod] = useState('None')
    const [selectedSubjectDetails, setSelectedSubjectDetails] = useState();
    const [hasErrors, setHasErrors] = useState('');



    const Theme = useContext(ThemeContext);
    const Subjects = useContext(SubjectsContext);
    const TimetablePreferences = useContext(TimetablePreferenceContext);
    const { timetablePreferencesValue, setTimetablePreferences } = TimetablePreferences;
    const { subjectValue, mergedSubjectsValue } = Subjects;
    const { themeValue } = Theme;

    useEffect(() => {
        if (branch === 'None' || semester === 'None' || subjectType === 'None' || selectedSubject === 'None' || selectedDay === 'None' || selectedPeriod === 'None') {
            setHasErrors('Fill all fields first')
        }
        else if (timetablePreferencesValue.has(`${selectedDay}${selectedPeriod}`)) {
            setHasErrors(`The slot on ${days[selectedDay]} and period ${selectedPeriod} is already booked by ${timetablePreferencesValue.get(`${selectedDay}${selectedPeriod}`).text}`)
        }
        else {
            setHasErrors('');
        }
    }, [branch, selectedDay, selectedSubject, subjectType, semester, selectedPeriod])

    const createHandler = (e) => {
        if (!hasErrors.length) {
            setHasErrors('');
            const payload = {
                text: '',
                day: parseInt(selectedDay),
                period: parseInt(selectedPeriod),
            }

            if (subjectType === 'Normal') {
                let str = `${subjects[selectedSubject].courseCode} ${subjects[selectedSubject].taughtBy ? subjects[selectedSubject].taughtBy : 'N.A.'}`
                payload.text = str;
                payload.id = subjects[selectedSubject]._id;
            }
            else if (subjectType === 'Optional') {
                const parsedIndex = parseInt(selectedSubject)
                const currSubject = subjects[parsedIndex]
                let str = `${currSubject.mergedSubject.courseCode} ${currSubject.mergedSubject.taughtBy ? currSubject.mergedSubject.taughtBy : 'N.A.'}`;
                payload.text = str;
                payload.id = currSubject._id;
            }
            else {
                console.log('error add_preference');
            }
            addPreference(payload);
            const currMap = timetablePreferencesValue;
            const key = `${selectedDay}${selectedPeriod}`
            currMap.set(key, payload);
            const newMap = new Map(currMap);
            setTimetablePreferences(newMap);
            closeModal(e)
        }
    }
    const subjectTypeChangeHandler = (subjectType) => {
        if (subjectType === 'Optional') {
            const resultArr = [];
            for (let i = 0; i < mergedSubjectsValue.length; i++) {
                const { _id } = mergedSubjectsValue[i];
                const mergedSubjects = mergedSubjectsValue[i].mergedSubjects;
                const mergedSubjectItem = mergedSubjects[0];
                if (mergedSubjectItem.semesterLevel === semester && mergedSubjectItem.branch === branch) {
                    resultArr.push({ _id: _id, mergedSubject: mergeSubjectsIntoOne(mergedSubjects) });
                }
            }
            setSubjects([...resultArr]);
        }
        else {
            const filtered = subjectValue.filter((item) => {
                if (item.semesterLevel === semester && item.class === branch) return item;
            })
            setSubjects(filtered);
        }
    }

    return (
        <div style={{ transform: 'translate(-50%,-50%)' }} className={`absolute left-[50%] top-[50%] rounded-[8px] h-[800px] flex flex-col justify-start gap-[30px] w-[616px] bg-03 px-[30px] ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"}`}>
            <div className='mt-[30px]'>
                <Text24px>Add Preference</Text24px>
            </div>
            <Select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                label={'Branch'}
            >
                <SelectItem value={'None'} disabled>None Selected</SelectItem>
                {branches.map((branch) => {
                    return <SelectItem value={branch}>{branch}</SelectItem>
                })
                }
            </Select>

            <Select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                label={'Semester/Level'}
                disabled={branch === 'None'}
            >
                <SelectItem value={'None'} disabled>None Selected</SelectItem>
                {branch === 'BCA' || branch === 'BBA' ?
                    threeYearSemesters.map((item) => {
                        return <SelectItem value={item}>{item}</SelectItem>
                    })
                    :
                    twoYearSemesters.map((item) => {
                        return <SelectItem value={item}>{item}</SelectItem>
                    })
                }

            </Select>

            <Select
                value={subjectType}
                onChange={(e) => {
                    setSubjectType(e.target.value)
                    subjectTypeChangeHandler(e.target.value);
                }}
                label={'Normal subject or optional subject'}
                disabled={semester === 'None'}
            >
                <SelectItem value={'None'} disabled>None Selected</SelectItem>
                {['Normal', 'Optional'].map((item) => {
                    return <SelectItem value={item}>{item}</SelectItem>
                })}
            </Select>

            <Select
                value={selectedSubject}
                onChange={(e) => {
                    setSelectedSubject(e.target.value)
                    setSelectedSubjectDetails(e.target.value);
                }}
                label={'Subject'}
                disabled={subjectType === 'None'}
            >
                <SelectItem value={'None'} disabled>None Selected</SelectItem>
                {subjects.map((subject, idx) => {
                    if (subjectType === 'Optional') {
                        return <SelectItem value={idx}>{subject.mergedSubject.courseTitle}</SelectItem>
                    }
                    else {
                        return <SelectItem value={idx}>{subject.courseTitle}</SelectItem>
                    }

                })}
            </Select>
            <Select
                value={selectedDay}
                onChange={(e) => {
                    setSelectedDay(e.target.value)
                }}
                label={'Day'}
                disabled={!subjects.length}
            >
                <SelectItem value={'None'} disabled>None Selected</SelectItem>
                {days.map((item, idx) => {
                    return <SelectItem value={idx}>{item}</SelectItem>
                })}
            </Select>
            <div className='mb-[10px]'>
                <Select
                    value={selectedPeriod}
                    onChange={(e) => {
                        setSelectedPeriod(e.target.value)
                    }}
                    label={'Period'}
                    disabled={!subjects.length}
                >
                    <SelectItem value={'None'} disabled>None Selected</SelectItem>
                    {periods.map((item, index) => {
                        return <SelectItem value={index}>{item}</SelectItem>
                    })}
                </Select>
                <div>
                    {hasErrors && <ErrorLabel>{hasErrors}</ErrorLabel>}
                </div>
            </div>
            <div className='flex items-center justify-end gap-[15px]'>
                <Button4 onClick={closeModal}>Cancel</Button4>
                <Button2
                    disabled={hasErrors.length}
                    onClick={createHandler}
                >Create</Button2>

            </div>

        </div>
    )
}

export default AddPreferenceDesktop