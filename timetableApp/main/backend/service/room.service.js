const Room = require("../modal/rooms.modal");

class RoomService {
    async get() {
        const result = await Room.find({});
        return result;
    }
    async add(obj) {
        const doc = new Room(obj);
        await doc.save();
        return;
    }
    async delete(id) {
        const res = await Room.findOneAndDelete({ _id: id });
        return res;
    }
}

module.exports = RoomService;