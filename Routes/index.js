const express = require('express');
const router = express.Router();
const clientsRouter = require('./clients');
const hotelRouter = require('./hotel');
const roomsRouter = require('./rooms');
const bookingRouter = require('./booking');


router.use('/api', clientsRouter);
router.use('/api', hotelRouter);
router.use('/api', roomsRouter);
router.use('/api', bookingRouter);



module.exports = router;