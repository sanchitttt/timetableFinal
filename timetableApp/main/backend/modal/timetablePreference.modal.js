const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    subjectId: { type: mongoose.Schema.Types.ObjectId },
    text: { type: String },
    day: { type: Number, enum: [0, 1, 2, 3, 4] },
    period: { type: Number, enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }
});

const TimetablePreference = mongoose.model('timetablePreferences', schema);

module.exports = TimetablePreference;