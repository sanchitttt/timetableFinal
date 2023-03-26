const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    mergedSubjects: [{
        courseCode: { type: String },
        courseTitle: { type: String },
        courseType: { type: String, enum: ['theory', 'lab'], default: 'theory' },
        credits: { type: String },
        classSchedulePerWeek: { type: String },
        class: { type: String },
        semesterLevel: { type: String },
        branch: { type: String },
        status: { type: String },
        taughtBy: { type: String, default: '' },
    }]
});

const MergedSubjects = mongoose.model('mergedSubjects', schema);

module.exports = MergedSubjects;