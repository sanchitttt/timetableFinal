const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    teacherName: { type: String },
    teacherInitials: { type: String },
    subjectsTaught: { type: [], default: [] }
})

const Teachers = mongoose.model('teachers', teacherSchema);

module.exports = Teachers;

