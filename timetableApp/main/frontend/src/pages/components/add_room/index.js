import React, { useContext, useState } from 'react'
import Button2 from '../../../common/buttons/Button2';
import Button4 from '../../../common/buttons/Button4';
import ErrorLabel from '../../../common/inputs/ErrorLabel';
import TextField from '../../../common/inputs/TextField';
import Text20px from '../../../common/text/Text20px';
import ThemeContext from '../../../global/contexts/ThemeContext'
import { addRoom } from '../../../utils/apiCalls';

function NewRoom({ viewableData, setViewableData, closeModal }) {
    const [roomId, setRoomId] = useState('');
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;

    const saveHandler = () => {
        const currArr = viewableData;
        currArr.push({
            roomId:roomId
        });
        setViewableData([...currArr]);
        addRoom(roomId);
        closeModal();
    }

    return (
        <div className={`w-[300px] h-[300px] flex flex-col gap-[20px] rounded-[8px] ${themeValue === 'dark' ? "bg-03" : "bg-[#fff]"} p-[20px]`}>
            <Text20px>New Room</Text20px>
            <div>
                <TextField
                    label='Subject Title'
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    placeholder={"Enter a room id"}
                    required
                />
                {roomId.length === 0 && <ErrorLabel>Subject title cant be empty</ErrorLabel>}
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

export default NewRoom