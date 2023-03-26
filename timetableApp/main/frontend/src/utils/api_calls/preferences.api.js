import config from "../../setup/config";
import axios from "axios";

export default class PreferencesApi {
    async getAll() {
        try {
            const { data } = await axios.get(`${config.BACKEND_URL}/timetablePreferences`);
            return data;
        } catch (error) {

        }

    }
    async getAllInMap() {
        try {
            const { data } = await axios.get(`${config.BACKEND_URL}/timetablePreferences`);
            const hashMap = new Map();
            for (let i = 0; i < data.length; i++) {
                const day = data[i].day;
                const period = data[i].period;
                const key = `${day}${period}`;
                hashMap.set(key, data[i]);
            }
            return hashMap;
        } catch (error) {

        }
    }
    async addPreference(data) {
        try {
            const result = await axios.post(`${config.BACKEND_URL}/timetablePreferences`, { ...data });
            return result;
        } catch (error) {

        }
    }

    async deletePreference(id) {
        try {
            const result = await axios.delete(`${config.BACKEND_URL}/timetablePreference/${id}`);
            return result;
        } catch (error) {

        }
    }
}