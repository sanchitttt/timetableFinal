import React, { useContext, useEffect, useState } from 'react'
import Button2 from '../../../../common/buttons/Button2';
import Button4 from '../../../../common/buttons/Button4';
import CancelIcon from '../../../../common/CancelIcon';
import Select from '../../../../common/inputs/Select';
import SelectItem from '../../../../common/inputs/SelectItem';
import Text24px from '../../../../common/text/Text24px';
import SubjectsContext from '../../../../global/contexts/SubjectsContext';
import ErrorLabel from '../../../../common/inputs/ErrorLabel'
import ThemeContext from '../../../../global/contexts/ThemeContext';
import axios from 'axios';
import config from '../../../../setup/config/index'
// import { addMergedSubject } from '../../../../utils/api_calls'

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
]

const branches = [
    'BCA',
    'MCA',
    'BBA',
    'MBA'
]

// const

function MergeSubjectDesktop({ closeModal }) {
    const Theme = useContext(ThemeContext);
    const Subjects = useContext(SubjectsContext);
    const { subjectValue, setSubjects } = Subjects;
    const { mergedSubjectsValue, setMergedSubjects } = Subjects;
    const [branch, setBranch] = useState('None');
    const [semester, setSemester] = useState('None');
    const [selectedSubjects, setSelectedSubjects] = useState({
        subject1: 'None',
        subject2: 'None'
    });
    const [subjectsList, setSubjectsList] = useState([]);
    const [mergedSubjectsIdsList, setMergedSubjectsIdsList] = useState(['None', 'None']);
    const [mergedSubjectsCount, setMergedSubjectsCount] = useState([1, 2]);
    const [hasErrors, setHasErrors] = useState(false);

    useEffect(() => {
        const filtered = subjectValue.filter((item) => {
            if (item.semesterLevel === semester && item.class === branch) return item;
        })
        setSubjectsList(filtered);
    }, [semester])


    const increaseMergeSubjectCount = () => {
        let curr = mergedSubjectsCount;
        const newCurr = [...curr, curr[curr.length - 1] + 1];
        setMergedSubjectsCount(newCurr)
        setSelectedSubjects({ ...selectedSubjects, subject3: 'None' })
    }

    const decrementMergeSubjectCount = () => {
        let curr = mergedSubjectsCount;
        curr.pop();
        let curr2 = mergedSubjectsIdsList;
        curr.pop();
        setMergedSubjectsIdsList([...curr2]);
        setMergedSubjectsCount([...curr]);
    }

    const handleSelectInputChangeForId = (value, idx) => {
        const curr = mergedSubjectsIdsList;
        curr[idx] = value;
        setMergedSubjectsIdsList([...curr]);
    }

    const createHandler = (e) => {
        let error;
        for (let i = 0; i < Object.keys(selectedSubjects).length; i++) {
            if (selectedSubjects[`subject${i + 1}`] === 'None') {
                setHasErrors(true);
                error = true;
            }
        }
        if (!error) {
            const payload = {
                "ids": mergedSubjectsIdsList
            }
            // addMergedSubject(payload)
                .then((data) => {
                    const newArr = mergedSubjectsValue;
                    const filtered = subjectValue.filter((item) => {
                        let found = false;
                        for (let i = 0; i < data.mergedSubjects.length; i++) {
                            if (item._id === data.mergedSubjects[i]._id) {
                                found = true;
                            }
                        }
                        if (!found) return item;
                    })
                    newArr.push(data);
                    setMergedSubjects([...newArr]);
                    setSubjects([...filtered])
                    closeModal(e);
                })
        }
    }

    const { themeValue } = Theme;
    return (
        <div style={{ transform: 'translate(-50%,-50%)' }} className={`absolute left-[50%] top-[50%] rounded-[8px] h-[800px] flex flex-col justify-start gap-[30px] w-[616px] bg-03 px-[30px] ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"} overflow-y-scroll py-[30px]`}>
            <div className=''>
                <Text24px>Create optional subject by merging</Text24px>
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


            {mergedSubjectsCount.map((item, idx) => {
                return <div className='flex justify-center items-center gap-[5px]'>
                    <div className='flex flex-col w-[100%]'>
                        <Select
                            value={selectedSubjects[`subject${idx + 1}`]}
                            onChange={(e) => {
                                setSelectedSubjects({ ...selectedSubjects, [`subject${idx + 1}`]: e.target.value });
                                handleSelectInputChangeForId(e.target.value, idx)
                                setHasErrors(false);
                            }}
                            label={'Subject'}
                            disabled={semester === 'None'}
                        >
                            <SelectItem value={'None'} disabled>None Selected</SelectItem>
                            {
                                subjectsList.map((item) => {
                                    return <SelectItem value={item._id}>{item.courseTitle} ({item.courseCode})</SelectItem>
                                })
                            }

                        </Select>
                        {selectedSubjects[`subject${idx + 1}`] === 'None' && hasErrors && <ErrorLabel>You must select a subject</ErrorLabel>}
                    </div>
                    {idx === mergedSubjectsCount.length - 1 &&
                        idx >= 2
                        &&
                        <div className='mt-[15px]'
                            onClick={decrementMergeSubjectCount}
                        >
                            <CancelIcon />
                        </div>}
                </div>

            })}


            <div className='flex items-center justify-center'>
                <div className={`rounded-[999px] text-14 flex items-center justify-center ${themeValue !== 'dark' ? 'bg-01' : 'bg-13'} w-[90%] h-[40px]`}
                    role='button'
                    aria-describedby='button'
                    onClick={increaseMergeSubjectCount}
                >
                    Add one more
                </div>
            </div>


            <div className='flex items-center justify-end gap-[15px]'>
                <Button4 onClick={closeModal}>Cancel</Button4>
                <Button2
                    onClick={createHandler}
                >Merge</Button2>
            </div>
        </div>
    )
}

export default MergeSubjectDesktop