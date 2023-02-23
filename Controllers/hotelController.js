const hotelService = require('../Services/hotelService');



function getHotelInfo (req, res){
    const hotel = hotelService.getHotelInfo();
    res.json(hotel);
}

module.exports = {
    getHotelInfo,
};