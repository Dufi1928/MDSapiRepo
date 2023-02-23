const fs = require('fs');


function bookRoom(client, room) {

    if (!client || !room) {
        return null;
    }

    const booking = {
        client: client,
        room: room,
        startDate: new Date(),
        endDate: null
    };

    return booking;
}

module.exports = {
    bookRoom
};