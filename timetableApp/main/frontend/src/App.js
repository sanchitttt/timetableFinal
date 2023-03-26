import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ThemeContext from "./global/contexts/ThemeContext";
import TeachersPage from "./pages/teachers_page";
import SubjectsPage from "./pages/subjects_page";
import TimetablePage from "./pages/timetable_page";
import RoomsPage from "./pages/rooms_page";
import axios from "axios";
import config from './setup/config';
import SubjectsContext from "./global/contexts/SubjectsContext";
import RoomsContext from "./global/contexts/RoomsContext";
import NavigateBack from "./pages/navigate_back";
import { getTeachers } from "./utils/apiCalls";
import TeachersContext from "./global/contexts/TeachersContext";
import RoomPrefencesPage from "./pages/room_preferences_page";
import TimetablePreferenceContext from "./global/contexts/TimetablePreferenceContext";

function App() {
  const [theme, setTheme] = useState('light');
  const [subjects, setSubjects] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [mergedSubjects, setMergedSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timetablePreferences, setTimetablePreferences] = useState([]);

  useEffect(() => {
    let bodyEle = document.getElementById('body');
    bodyEle.style.background = theme === 'dark' ? "#141625" : "#F8F8FB"
  }, [theme]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(`${config.BACKEND_URL}/subjects`);
      setSubjects(data);
    }
    const fetch2 = async () => {
      const { data } = await axios.get(`${config.BACKEND_URL}/rooms`);
      setRooms(data);
    }
    const fetch3 = async () => {
      const data = await getTeachers();
      setTeachers(data);
    }
    const fetch4 = async () => {
      const { data } = await axios.get(`${config.BACKEND_URL}/mergedSubjects`);
      setMergedSubjects(data);
    }
    const fetch5 = async () => {
      const { data } = await axios.get(`${config.BACKEND_URL}/timetablePreferences`);
      const hashMap = new Map();
      for (let i = 0; i < data.length; i++) {
        const day = data[i].day;
        const period = data[i].period;
        const key = `${day}${period}`;
        hashMap.set(key, data[i]);
      }
      setTimetablePreferences(hashMap);
    }
    fetch();
    fetch2();
    fetch3();
    fetch4();
    fetch5();
    setLoading(false);
  }, []);
  return (
    <div className={`App`}>
      <ThemeContext.Provider value={{ themeValue: theme, changeTheme: setTheme }}>
        <SubjectsContext.Provider value={{ subjectValue: subjects, setSubjects: setSubjects, mergedSubjectsValue: mergedSubjects, setMergedSubjects: setMergedSubjects }}>
          <RoomsContext.Provider value={{ roomsValue: rooms, setRooms: setRooms }}>
            <TeachersContext.Provider value={{ teachersValue: teachers, setTeachers: setTeachers }}>
              <TimetablePreferenceContext.Provider value={{ timetablePreferencesValue: timetablePreferences, setTimetablePreferences: setTimetablePreferences }}>
                <Routes>
                  <Route path='/teachers' element={<TeachersPage />} />
                  <Route path='/subjects' element={<SubjectsPage />} />
                  <Route path='/timetable' element={<TimetablePage />} />
                  <Route path='/rooms' element={<RoomsPage />} />
                  <Route path='/timetablePreferences' element={<RoomPrefencesPage />} />
                  <Route path='*' element={<NavigateBack />} />
                </Routes>
              </TimetablePreferenceContext.Provider>
            </TeachersContext.Provider>
          </RoomsContext.Provider>
        </SubjectsContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
