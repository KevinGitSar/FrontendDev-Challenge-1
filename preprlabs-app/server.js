require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnection');
const PORT = process.env.PORT || 3500;

//Connect to MongoDB
connectDB();


// White list domains

const whitelist = [];
const corsOptions = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1){
            callback(null, true);
        } else {
            callback(new Error('Not Allowed by CORS'));
        }
    },
    optionSuccessStatus: 200
};

// Cross Origin Resource Sharing // add corsOptions
app.use(cors());


// Built-in middleware
app.use(express.urlencoded( { extended:false } ));
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/subdir', express.static(path.join(__dirname, '/public')));

//Is this the routes used to do the command?
app.use('/register/create', require('./routes/register'));
app.use('/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('hello world')
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});