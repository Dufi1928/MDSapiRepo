const bookingService = require('../Services/bookingService');
const clientsService = require('../Services/clientsService');
const roomsService = require('../Services/roomsService');


function bookRoom(req, res) {
    const clientId = parseInt(req.body.clientId);
    const client = clientsService.getClientById(clientId);
    const roomId = parseInt(req.body.roomId);
    const room = roomsService.getHotelRoomById(roomId);
    const booking = bookingService.bookRoom(client, room);

    if (booking) {
        res.status(200).send(`Room ${booking.room.id} is booked by ${booking.client.name}`);
    } else {
        res.status(404).send('Booking failed: client or room not found');
    }
}

module.exports = {
    bookRoom,
};