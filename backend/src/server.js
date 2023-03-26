const express = require('express');
const db = require('./database/database');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();

db.connect();

app.use(cors());

app.use(express.json());

app.use('/api', routes)

const port = 4000; //process.env.PORT || 4000;
app.listen(port, () => console.log("Server is running on port " + port));