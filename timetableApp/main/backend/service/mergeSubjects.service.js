const MergedSubjects = require("../modal/mergeSubjects");

const Subjects = require("../modal/subject.modal");

class MergedSubjectsService {
    async getById(id) {
        try {
            const res = await MergedSubjects.findById(id);
            return res;
        } catch (error) {

        }
    }
    async delete(id) {
        try {
            const res = await MergedSubjects.findById(id);
            if (res.mergedSubjects.length) {
                await Subjects.insertMany(res.mergedSubjects)
            }
            await MergedSubjects.findByIdAndDelete(id);
            return res;
        } catch (error) {

        }
    }
    async update(obj, idsAddedFromSubjectsToMergedObjects, objectsRemovedFromMergedObjects) {
        try {
            const deleteQuery = [];
            const { _id } = obj;
            const result = await MergedSubjects.findOneAndUpdate(
                { _id: _id }, obj
            )
            for (let i = 0; i < idsAddedFromSubjectsToMergedObjects.length; i++) {
                deleteQuery.push({ _id: idsAddedFromSubjectsToMergedObjects[i] });
            }

            if (idsAddedFromSubjectsToMergedObjects.length)
                await Subjects.deleteMany({
                    $or: deleteQuery
                })

            if (objectsRemovedFromMergedObjects.length)
                await Subjects.insertMany(objectsRemovedFromMergedObjects)

            return result;
        } catch (error) {
            console.log(error)
        }

    }
    async getAll() {
        const result = await MergedSubjects.find({});
        return result;
    }
    async add(obj) {
        const doc = new MergedSubjects(obj);
        const res = await doc.save();
        return res;
    }
}

module.exports = MergedSubjectsService;