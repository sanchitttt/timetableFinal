import config from "../../setup/config";
import axios from "axios";

export default class RoomsApi {
    async getAll(){
        try {
            const { data } = await axios.get(`${config.BACKEND_URL}/rooms`);
            return data;
        } catch (error) {
            
        }
    }
    async deleteRoom(roomId) {
        try {
            const res = await axios.delete(`${config.BACKEND_URL}/rooms/${roomId}`);
            console.log(res);
        } catch (error) {

        }
    }

    async addRoom(roomId) {
        try {
            const res = await axios.post(`${config.BACKEND_URL}/rooms`, { roomId: roomId })
            return res;
        } catch (error) {

        }
    }
}