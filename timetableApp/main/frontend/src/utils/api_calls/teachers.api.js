import axios from "axios";
import config from "../../setup/config";

export default class TeachersApi {
    async getAll() {
        try {
            const res = await axios.get(`${config.BACKEND_URL}/teachers`);
            return res.data;
        } catch (error) {

        }
    }

    async postTeacher(obj) {
        try {
            const res = await axios.post(`${config.BACKEND_URL}/teachers`, obj);
            return res.data;
        } catch (error) {

        }
    }

    async deleteTeacher(id) {
        try {
            const res = await axios.delete(`${config.BACKEND_URL}/teachers/${id}`);
            return res.data;
        } catch (error) {

        }
    }
}