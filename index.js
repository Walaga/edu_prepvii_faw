const express = require('express'); // import express
const mongoose = require('mongoose'); // import mongoose
const authRoute = require('./routes/authRoute'); // import auth routes
const bodyParser = require('body-parser'); // import body parser
const request = require('request');
const morgan = require('morgan');

const app = express(); // initialise the app

// env variables
require('dotenv').config();
const port = process.env.PORT || 3000;

// Launch app to listen to specified port
app.listen(port, (req, res) => {
    console.log(`Server running at http://localhost:${port}`);
});

// Middleware or use user routes in the app
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/auth', authRoute);


// send message for default URL
app.get('/', (req, res) => {
    res.send('Hello Welcome!');
});

// connect db
mongoose.connect('mongodb://localhost:27017/faw', { useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connect; // set connection variable

// check for db connection
if(!db) {
    console.log("Error connecting db");
} else {
    console.log("Db connected successfully");
};

