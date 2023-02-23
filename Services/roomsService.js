const fs = require('fs');

function getHotelRooms() {
    const hotelData = JSON.parse(fs.readFileSync('data/hotel.json', 'utf8'));
    const rooms = hotelData.rooms;
    return rooms;
}

function getHotelRoomById(roomId) {
    const hotelData = JSON.parse(fs.readFileSync('data/hotel.json', 'utf8'));
    const room = hotelData.rooms.find(room => room.id === roomId);
    return room;
}

module.exports = {
    getHotelRooms,
    getHotelRoomById
};