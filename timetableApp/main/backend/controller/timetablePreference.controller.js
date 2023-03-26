const TimetablePreferenceService = require("../service/timetablePreference.service")
const TimetablePreferenceServiceInstance = new TimetablePreferenceService();


async function getTimetablePreferences(req, res) {
    try {
        const result = await TimetablePreferenceServiceInstance.getAll();
        res.json(result);
    } catch (error) {

    }
}

async function postTimetablePreferences(req, res) {
    try {
        const { id, text, day, period } = req.body;
        const result = await TimetablePreferenceServiceInstance.newPreference(id, text, day, period);
        res.json(result);
    } catch (error) {

    }
}

async function deleteTimetablePreference(req, res) {
    try {
        const { id } = req.params;
        const result = await TimetablePreferenceServiceInstance.delete(id);
        res.json(result);
    } catch (error) {

    }
}

module.exports = { getTimetablePreferences, postTimetablePreferences, deleteTimetablePreference }