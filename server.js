const express = require('express');
const mongoose = require('mongoose');

const app = express();

//DB Config
const db = require('./config/keys').mongoURI;

//connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongDB Connected'))
    .catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello!'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running on port 5000'));