const fs = require('fs');

function getAllClients() {
    const clients = JSON.parse(fs.readFileSync('data/clients.json', 'utf8')).clients;
    return clients;
}

function getClientById(clientId) {
    const clients = getAllClients();
    const client = clients.find(client => client.id === clientId);
    return client;
}

module.exports = {
    getAllClients,
    getClientById
};