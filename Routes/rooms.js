const express = require('express');
const router = express.Router();
const clientsController = require('../Controllers/roomsController');

router.get('/rooms', clientsController.getHotelRooms);
router.get('/rooms/:id', clientsController.getHotelRoomById);

module.exports = router;