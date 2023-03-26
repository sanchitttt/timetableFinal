
const Subjects = require("../modal/subject.modal");
const MergedSubjects = require("../service/mergeSubjects.service");
const MergedSubjectModal = require("../modal/mergeSubjects");
const TimetablePreference = require("../modal/timetablePreference.modal");
const TimetablePreferenceService = require("./timetablePreference.service");
const TimetablePreferenceServiceInstance = new TimetablePreferenceService();
const MergedSubjectInstance = new MergedSubjects();

class SubjectService {

    async getById(id) {
        try {
            const res = await Subjects.findById(id);
            return res;
        } catch (error) {

        }
    }
    /**
     * @description Removes id2 from id1
     * @param {ObjectId} id1
     * @param {ObjectId} id2
     */
    async split(id) {
        try {
            const mergedSubjectObj = await MergedSubjectModal.findById(id);
            const mergedSubjects = mergedSubjectObj.mergedSubjects;
            for (let i = 0; i < mergedSubjects.length; i++) {
                await this.add(mergedSubjects[i], true);
            }
            await MergedSubjectModal.findByIdAndDelete(id);
            return { "message": "Split successfull" }
        } catch (error) {
            console.log(error);
        }

    }
    /**
     * @description Merges id2 in id1
     * @param {ObjectId} id1 
     * @param {ObjectId} id2 
     */

    async merge(...ids) {
        const queryObject = [];
        for (let i = 0; i < ids.length; i++) {
            queryObject.push({ _id: ids[i] });
        }
        const res = await Subjects.find({
            $or: queryObject
        })
        await Subjects.deleteMany({
            $or: queryObject
        })

        const mergedSubjectCreated = await MergedSubjectInstance.add(
            {
                mergedSubjects: res
            }
        );
        return mergedSubjectCreated;

    }
    async delete(id) {
        const result = await Subjects.findByIdAndDelete(id);
        return result;
    }
    async get() {
        const result = await Subjects.find({});
        return result;
    }
    async add(obj, forSplitting) {
        try {
            const doc = new Subjects(obj);
            if (forSplitting === true) doc.isNew = true;
            await doc.save();
            return;
        } catch (error) {
            console.log(error);
        }

    }
    async save(obj) {
        const res = await Subjects.findOneAndReplace({ _id: obj._id }, obj);
        const isANormalSubject = await TimetablePreference.findOne({ subjectId: obj._id });
        if (isANormalSubject) {
            isANormalSubject.text = `${obj.courseCode} ${obj.taughtBy ? obj.taughtBy : 'N.A.'}`
            await TimetablePreference.deleteOne({ subjectId: obj._id });
            const { subjectId, text, day, period } = isANormalSubject;
            await TimetablePreferenceServiceInstance.newPreference(subjectId, text, day, period);
        }
        


        return res;
    }
}

module.exports = SubjectService