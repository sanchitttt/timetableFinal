const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    roomId: { type: String }
});

const Room = mongoose.model('rooms', schema);

module.exports = Room