const SubjectService = require("../service/subject.service");
const MergedSubjectsService = require("../service/mergeSubjects.service");
const SubjectServiceInstance = new SubjectService();
const MergedSubjectsServiceInstance = new MergedSubjectsService();

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

const postMergeSubjects = async (req, res) => {
    try {
        const { ids } = req.body;
        let result = await SubjectServiceInstance.merge(...ids);
        res.json(result);
    } catch (error) {

    }
}

const splitSubjects = async (req, res) => {
    try {
        const { id } = req.body;
        let result = await SubjectServiceInstance.split(id);
        res.json(result);
    } catch (error) {

    }
}

const getMergedSubjects = async (req, res) => {
    try {
        const result = await MergedSubjectsServiceInstance.getAll();
        res.json(result);
    } catch (error) {

    }
}

const patchMergeSubjects = async (req, res) => {
    try {
        // idsAdded -> idsAdded to mergeSubjects from subjects and idsRemoved -> ids removed from mergedSubjects back to subjects
        const { newObj, idsAddedFromSubjectsToMergedObjects, objectsRemovedFromMergedObjects } = req.body;
        const result = await MergedSubjectsServiceInstance.update(newObj, idsAddedFromSubjectsToMergedObjects, objectsRemovedFromMergedObjects);
        res.json(result);
    } catch (error) {

    }
}

const deleteMergedSubjects = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log('reached1',id);
        const result = await MergedSubjectsServiceInstance.delete(id);
        res.json(result);
    } catch (error) {

    }
}

module.exports = {
    fetchSubjects,
    addSubject,
    saveSubjectDetails,
    postMergeSubjects,
    splitSubjects,
    getMergedSubjects,
    patchMergeSubjects,
    deleteMergedSubjects
}