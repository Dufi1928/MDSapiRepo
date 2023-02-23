const clientsService = require('../Services/clientsService');

function getAllClients(req, res) {
    const clients = clientsService.getAllClients();
    res.json(clients);
}

function getClientById(req, res) {
    const clientId = parseInt(req.params.id);
    const client = clientsService.getClientById(clientId);

    if (client) {
        res.json(client);
    } else {
        res.status(404).send(`Client with id ${clientId} not found.`);
    }
}

module.exports = {
    getAllClients,
    getClientById
};