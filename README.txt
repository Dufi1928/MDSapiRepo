##################################################################################################################
Hotel Reservation System
##################################################################################################################

This project is an implementation of a reservation system for a hotel.
The first version will allow the hotel to list all its clients, retrieve
the information of a specific client, retrieve the hotel's information,
and allow its clients to list all the hotel's rooms, retrieve the information of a specific room,
and book a room.

##################################################################################################################
Features
##################################################################################################################

The features implemented in the first version are:

List all the hotel's clients
Retrieve information of a specific client
Retrieve information about the hotel
List all the hotel's rooms
Retrieve information of a specific room
Allow clients to book a room


##################################################################################################################
Installation
##################################################################################################################

1. Install the necessary dependencies:
    npm install

2. Run the application:
    npm index.js

The application will run on the default port 3000. You can access it through your browser by opening the URL http://localhost:3000.


##################################################################################################################
API Endpoints
##################################################################################################################

The API provides the following endpoints:

GET http://localhost:3000/api/clients: List of all the hotel's clients
GET http://localhost:3000/api/clients/:id: Retrieve information of a specific client
GET http://localhost:3000/api/hotel :   Retrieve information about the hotel
GET http://localhost:3000/api/rooms: List of all the hotel's rooms
GET http://localhost:3000/api/rooms/:id: Retrieve information of a specific room

POST http://localhost:3000/api/booking : Allow clients to book a room
    Request Body example:
        {
            "roomId": 2,
            "clientId": 5
        }

##################################################################################################################
Author
##################################################################################################################

This project was developed by Hryb ivan . If you have any questions or comments, please feel free to contact me ivanhrybe@gmail.com.


