import config from "../../setup/config";
import axios from "axios";

export default class SubjectsApi {
    async getAll() {
        try {
            const { data } = await axios.get(`${config.BACKEND_URL}/subjects`);
            return data;
        } catch (error) {

        }
    }
    async patchSubject(obj) {
        try {
            const res = await axios.patch(`${config.BACKEND_URL}/subjects`, obj);
            return res.status;
        } catch (error) {

        }
    }

    async addNewSubject(data) {
        try {
            const res = await axios.post(`${config.BACKEND_URL}/subjects`, { ...data });
        } catch (error) {

        }
    }
}