const TimetablePreference = require("../modal/timetablePreference.modal")

class TimetablePreferenceService {
    async save(id) {
        
    }
    async newPreference(subjectId, text, day, period) {
        const doc = new TimetablePreference({
            subjectId: subjectId,
            text: text,
            day: day,
            period: period
        });
        await doc.save();
        return doc;

    }
    async getAll() {
        const res = await TimetablePreference.find({});
        return res;
    }
    async delete(id) {
        const res = await TimetablePreference.deleteOne({ subjectId: id });
        return res;
    }
}

module.exports = TimetablePreferenceService;