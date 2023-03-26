import config from "../../setup/config";
import axios from "axios";

export default class MergedSubjectApi {
    async getAll(){
        try {
            const { data } = await axios.get(`${config.BACKEND_URL}/mergedSubjects`);
            return data;
        } catch (error) {
            
        }
    }
    async addMergedSubject(payload) {
        try {
            const result = await axios.post(`${config.BACKEND_URL}/mergeSubjects`, payload)
            return result.data;
        } catch (error) {
    
        }
    }
    
    async deleteMergedSubject(id) {
        try {
            await axios.delete(`${config.BACKEND_URL}/mergedSubjects/${id}`)
        }
        catch (err) {
    
        }
    }
    
    
}