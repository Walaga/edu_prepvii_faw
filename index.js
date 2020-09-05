const express = require('express');
const app = express();
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

require('dotenv').config()

//middleware
app.use(cors())
app.use(express.json())
app.use(routes)

//database
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open', () => console.log('Database is connected'))

//server
const port = process.env.PORT || 4000;
app.listen(port, function() {
    console.log("API is running")
})
