const TeacherService = require("../service/teacher.service")
const TeacherServiceInstance = new TeacherService();


async function getTeachers(req, res) {
    try {
        const teachers = await TeacherServiceInstance.getAll();
        res.json(teachers);
    } catch (error) {

    }
}

async function postTeachers(req, res) {
    try {
        const teachers = await TeacherServiceInstance.new(req.body);
        res.json(teachers);
    } catch (error) {

    }
}


async function deleteTeacher(req, res) {
    try {
        const { _id } = req.params;
        const teachers = await TeacherServiceInstance.delete(_id);
        res.json(teachers);
    } catch (error) {

    }
}



module.exports = { getTeachers, postTeachers, deleteTeacher }