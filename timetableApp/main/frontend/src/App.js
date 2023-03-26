import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import ThemeContext from "./global/contexts/ThemeContext";
import SubjectsContext from "./global/contexts/SubjectsContext";
import RoomsContext from "./global/contexts/RoomsContext";
import TimetablePreferenceContext from "./global/contexts/TimetablePreferenceContext";
import TeachersContext from "./global/contexts/TeachersContext";

import RoomPrefencesPage from "./pages/room_preferences_page";
import TeachersPage from "./pages/teachers_page";
import SubjectsPage from "./pages/subjects_page";
import RoomsPage from "./pages/rooms_page";
import TimetablePage from "./pages/timetable_page";
import NavigateBack from "./pages/navigate_back";

import { SubjectsApi, TeachersApi, RoomsApi, PreferencesApi, MergedSubjectApi } from "./utils/api_calls";

const SubjectsApiInstance = new SubjectsApi();
const TeachersApiInstance = new TeachersApi();
const RoomsApiInstance = new RoomsApi();
const PreferencesApiInstance = new PreferencesApi();
const MergedSubjectApiInstance = new MergedSubjectApi();

function App() {
  const [theme, setTheme] = useState('light');
  const [subjects, setSubjects] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [mergedSubjects, setMergedSubjects] = useState([]);
  const [timetablePreferences, setTimetablePreferences] = useState([]);

  useEffect(() => {
    let bodyEle = document.getElementById('body');
    bodyEle.style.background = theme === 'dark' ? "#141625" : "#F8F8FB"
  }, [theme]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const data = await SubjectsApiInstance.getAll();
      setSubjects(data);
    }
    const fetchRooms = async () => {
      const data = await RoomsApiInstance.getAll();
      setRooms(data);
    }
    const fetchTeachers = async () => {
      const data = await TeachersApiInstance.getAll();
      setTeachers(data);
    }
    const fetchMergedSubjects = async () => {
      const data = await MergedSubjectApiInstance.getAll();
      setMergedSubjects(data);
    }
    const fetchTimetablePreferences = async () => {
      const hashMap = await PreferencesApiInstance.getAllInMap();
      setTimetablePreferences(hashMap);
    }
    fetchSubjects();
    fetchRooms();
    fetchTeachers();
    fetchMergedSubjects();
    fetchTimetablePreferences();
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
