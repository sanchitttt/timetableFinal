const SubjectService = require("../service/subject.service")
const SubjectServiceInstance = new SubjectService();

const fetchSubjects = async (req, res) => {
    try {
        let result = await SubjectServiceInstance.get();
        res.json(result);
    } catch (error) {

    }
}

const addSubject = async (req, res) => {
    try {
        let result = await SubjectServiceInstance.add(req.body);
        res.json(result);
    } catch (error) {

    }
}

const saveSubjectDetails = async (req, res) => {
    try {
        let result = await SubjectServiceInstance.save(req.body);
        res.json(result);
    } catch (error) {

    }
}

module.exports = { fetchSubjects, addSubject, saveSubjectDetails }