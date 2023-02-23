const fs = require('fs');

function getHotelInfo() {
    const hotelInfo = JSON.parse(fs.readFileSync('data/hotel.json', 'utf8'));
    return hotelInfo;
}

module.exports = {
    getHotelInfo
};