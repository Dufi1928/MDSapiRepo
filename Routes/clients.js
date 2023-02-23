const express = require('express');
const router = express.Router();
const clientsController = require('../Controllers/clientsController');

router.get('/clients', clientsController.getAllClients);
router.get('/clients/:id', clientsController.getClientById);

module.exports = router;