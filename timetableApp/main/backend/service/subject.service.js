const Subjects = require("../modal/subject.modal")

class SubjectService {
    async get() {
        const result = await Subjects.find({});
        return result;
    }
    async add(obj) {
        const doc = new Subjects(obj);
        await doc.save();
        return;
    }
    async save(obj) {
        const res = await Subjects.findOneAndReplace({ _id: obj._id }, obj);
        console.log(res)
        return res;
    }
}

module.exports = SubjectService