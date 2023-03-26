import TextField from '../../../common/inputs/TextField';
import React, { useContext, useState } from 'react'
import Button2 from '../../../common/buttons/Button2';
import Button4 from '../../../common/buttons/Button4';
import Text20px from '../../../common/text/Text20px';
import ErrorLabel from '../../../common/inputs/ErrorLabel';
import ThemeContext from '../../../global/contexts/ThemeContext'
import { TeachersApi } from '../../../utils/api_calls';

const TeachersApiInstance = new TeachersApi();

function AddTeacher({ closeModal, viewableData, setViewableData }) {
    const [teacherName, setTeacherName] = useState('');
    const [teacherInitials, setTeacherInitials] = useState('');
    const [clickedOnce, setClickedOnce] = useState(false);

    const saveHandler = (event) => {
        if (teacherName.length && teacherInitials.length) {
            const obj = {
                teacherName: teacherName,
                teacherInitials: teacherInitials,
                subjectsTaught: []
            }
            TeachersApiInstance.postTeacher(obj)
            viewableData.push(obj)
            setViewableData([...viewableData])
            closeModal(event);
        }
        else {
            if (!clickedOnce) setClickedOnce(true);
        }

    }
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;
    return (
        <div style={{ transform: 'translate(-50%,-50%)' }} className={`absolute left-[50%] top-[50%] w-[300px] h-[400px] flex flex-col gap-[20px] rounded-[8px] ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"} p-[20px]`}>
            <Text20px>Add Teacher</Text20px>
            <div>
                <TextField
                    label='Teacher name'
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                    placeholder={"Ex : Anurag Joshi"}
                    required
                />
                {teacherName.length === 0 && clickedOnce && <ErrorLabel>Teacher name cant be empty</ErrorLabel>}
            </div>
            <div>
                <TextField
                    label='Teacher initials'
                    value={teacherInitials}
                    onChange={(e) => setTeacherInitials(e.target.value)}
                    placeholder={"Ex : ANJ"}
                    required
                />
                {teacherInitials.length === 0 && clickedOnce && <ErrorLabel>Teacher initials cant be empty</ErrorLabel>}
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

export default AddTeacher;