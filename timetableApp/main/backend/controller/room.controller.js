const RoomService = require("../service/room.service")
const RoomServiceInstance = new RoomService();

const fetchRooms = async (req, res) => {
    try {
        let result = await RoomServiceInstance.get();
        res.json(result);
    } catch (error) {

    }
}

const postRoom = async (req, res) => {
    try {
        let result = await RoomServiceInstance.add(req.body);
        res.json(result);
    } catch (error) {

    }
}

const deleteRoom = async (req, res) => {
    try {
        const { _id } = req.params;
        let result = await RoomServiceInstance.delete(_id);
        res.json(result);
    } catch (error) {

    }
}


module.exports = { fetchRooms, postRoom, deleteRoom }