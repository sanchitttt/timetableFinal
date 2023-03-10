require('dotenv').config();
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();

const { fetchSubjects, addSubject, saveSubjectDetails } = require('./controller/subject.controller');
const { fetchRooms, postRoom, deleteRoom } = require('./controller/room.controller');
const { getGenerateTimetableInExcelFormat, postGenerateTimetableInExcelFormat } = require('./controller/timetable.controller');
const { getTeachers, postTeachers, deleteTeacher } = require('./controller/teachers.controller');

mongoose.connect(process.env.MONGODB_URI)
    .then((res) => console.log('Successfully connected to the database...'))
    .catch((err) => console.log("Failed to connect to the database!"));

app.use(express.json());
app.use(cors());
app.options("*", cors());

app.get('/subjects', fetchSubjects);
app.patch('/subjects', saveSubjectDetails);
app.post('/subjects', addSubject);

app.get('/rooms', fetchRooms);
app.post('/rooms', postRoom);
app.delete('/rooms/:_id', deleteRoom);

app.get('/teachers', getTeachers);
app.post('/teachers', postTeachers);
app.delete('/teachers/:_id', deleteTeacher);


app.post('/timetable-excel', postGenerateTimetableInExcelFormat);
app.get('/timetable-excel', getGenerateTimetableInExcelFormat);


app.listen(process.env.PORT, () => console.log(`Listening on PORT ${process.env.PORT}...`));