const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    courseCode: { type: String },
    courseTitle: { type: String },
    credits: { type: String },
    classSchedulePerWeek: { type: String },
    class: { type: String },
    semesterLevel: { type: String },
    branch: { type: String },
    status: { type: String },
    taughtBy: { type: String, default: '' }
});

const Subjects = mongoose.model('subjects', schema);

module.exports = Subjects