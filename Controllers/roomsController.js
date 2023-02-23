const roomsService = require('../Services/roomsService');

function getHotelRooms(req, res) {
    const rooms = roomsService.getHotelRooms();
    res.json(rooms);
}

function getHotelRoomById(req, res) {
    const roomId = parseInt(req.params.id);
    const room = roomsService.getHotelRoomById(roomId);

    if (room) {
        res.json(room);
    } else {
        res.status(404).send(`Room with id ${roomId} not found.`);
    }
}

module.exports = {
    getHotelRooms,
    getHotelRoomById
};