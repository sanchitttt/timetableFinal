import axios from "axios";
import config from "../../setup/config";

/**
 * @function patchSubject
 * @param {Object} obj 
 */
export async function patchSubject(obj) {
    try {
        const res = await axios.patch(`${config.BACKEND_URL}/subjects`, obj);
        return res.status;
    } catch (error) {

    }
}

export async function deleteRoom(roomId) {
    try {
        const res = await axios.delete(`${config.BACKEND_URL}/rooms/${roomId}`);
        console.log(res);
    } catch (error) {

    }
}

export async function addRoom(roomId) {
    try {
        const res = await axios.post(`${config.BACKEND_URL}/rooms`, { roomId: roomId })
        return res;
    } catch (error) {

    }
}

export async function downloadAsAttachment(data) {
    try {
        console.log(data);
        let res = await axios.post(`${config.BACKEND_URL}/timetable-excel`, { data: data });
        // const res2 = await axios.get(`${config.BACKEND_URL}/timetable-excel?rowspan=${rowSpan}`)
        //    console.log(res2.data.blob())
    } catch (error) {

    }
}

export async function addNewSubject(data) {
    try {
        const res = await axios.post(`${config.BACKEND_URL}/subjects`, { ...data });
    } catch (error) {

    }
}

export async function getTeachers() {
    try {
        const res = await axios.get(`${config.BACKEND_URL}/teachers`);
        return res.data;
    } catch (error) {

    }
}

export async function postTeacher(obj) {
    try {
        const res = await axios.post(`${config.BACKEND_URL}/teachers`, obj);
        return res.data;
    } catch (error) {

    }
}

export async function deleteTeacher(id) {
    try {
        const res = await axios.delete(`${config.BACKEND_URL}/teachers/${id}`);
        return res.data;
    } catch (error) {

    }
}


export async function addMergedSubject(payload) {
    try {
        const result = await axios.post(`${config.BACKEND_URL}/mergeSubjects`, payload)
        console.log(result.data);
        return result.data;
    } catch (error) {

    }
}

export async function deleteMergedSubject(id) {
    try {
        const result = await axios.delete(`${config.BACKEND_URL}/mergedSubjects/${id}`)
    }
    catch (err) {

    }
}


export async function addPreference(data) {
    try {
        const result = await axios.post(`${config.BACKEND_URL}/timetablePreferences`, { ...data });
        return result;
    } catch (error) {

    }
}

export async function deletePreference(id) {
    try {
        const result = await axios.delete(`${config.BACKEND_URL}/timetablePreference/${id}`);
        return result;
    } catch (error) {

    }
}