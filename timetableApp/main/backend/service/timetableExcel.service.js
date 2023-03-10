const TimetableExcel = require('../modal/timetableExcel.modal');

class TimetableExcelClass {
    async postNew(data) {
        await TimetableExcel.deleteMany({});
        await TimetableExcel.insertMany(data);
    }
    async getAll() {
        const res = await TimetableExcel.find({}, { _id: 0, __v: 0 });
        return res;
    }
}

module.exports = TimetableExcelClass;