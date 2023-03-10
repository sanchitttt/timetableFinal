const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    Day: { type: String },
    Branch: { type: String },
    Period1: { type: String },
    Period2: { type: String },
    Period3: { type: String },
    Period4: { type: String },
    Period5: { type: String },
    Period6: { type: String },
    Period7: { type: String },
    Period8: { type: String },
});

const TimetableExcel = mongoose.model('timetableexcels', schema);

module.exports = TimetableExcel;