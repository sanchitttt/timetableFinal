const Teachers = require('../modal/teacher.modal');

class TeacherService {
    async getAll() {
        const res = await Teachers.find({});
        return res;
    }
    async new(obj) {
        const doc = new Teachers(obj);
        await doc.save();
        return;
    }
    async delete(id) {
        const result = await Teachers.findOneAndDelete({ _id: id });
        return result;
    }

}

module.exports = TeacherService;