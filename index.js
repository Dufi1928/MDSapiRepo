const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./Routes');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
app.use(routes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});