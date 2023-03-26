import config from "../../setup/config";
import axios from "axios";

export default class TimetableApi {
    async postTimetable(data) {
        try {
            await axios.post(`${config.BACKEND_URL}/timetable-excel`, { data: data });
        } catch (error) {
    
        }
    }
}