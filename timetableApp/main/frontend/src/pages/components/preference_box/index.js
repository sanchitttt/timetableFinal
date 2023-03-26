import React, { useContext, useState } from 'react'
import DeleteIcon from '../../../common/DeleteIcon'
import Text13px from '../../../common/text/Text13px'
import Text15px from '../../../common/text/Text15px'
import Text18px from '../../../common/text/Text18px'
import ThemeContext from '../../../global/contexts/ThemeContext'
import TimetablePreferenceContext from '../../../global/contexts/TimetablePreferenceContext'
import { PreferencesApi } from '../../../utils/api_calls'

const PreferenceApiInstance = new PreferencesApi();

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const periodTransformation = (period) => {
    switch (period) {
        case 0:
            return '1st Period'
        case 1:
            return '2nd Period'
        case 3:
            return '3rd Period'
        default:
            return `${period + 1}th Period`
    }
}

function PreferenceBox({ id, text, day, period, color }) {
    const Theme = useContext(ThemeContext);
    const Preferences = useContext(TimetablePreferenceContext);
    const { setTimetablePreferences, timetablePreferencesValue } = Preferences;
    const { themeValue } = Theme;
    const [periodState, setPeriodState] = useState(() => periodTransformation(period));
    const [isHovered, setIsHovered] = useState(false);


    const mouseOverHandler = () => {
        setIsHovered(true);
    }

    const mouseLeaveHandler = () => {
        setIsHovered(false);
    }

    const deleteHandler = () => {
        const key = `${day}${period}`;
        const map = timetablePreferencesValue;
        map.delete(key);
        const newMap = new Map(map);
        setTimetablePreferences(newMap);
        PreferenceApiInstance.deletePreference(id);
    }

    return (
        <div
            className={`preference-box p-[20px]  w-[315px] h-[130px] justify-between gap-[10px] flex flex-col ${color ? 'bg-14' : themeValue === 'dark' ? "bg-03" : "bg-[#fff]"} rounded-[8px] relative`}
            onMouseOver={mouseOverHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <Text18px bold>{text}</Text18px>
            <Text18px bold>{days[day]} {periodState}</Text18px>
            <div className={`absolute right-[10px] top-[10px] ${!isHovered && 'hidden'}`}
                onClick={deleteHandler}
            >
                <DeleteIcon />
            </div>
        </div>
    )
}

export default PreferenceBox;