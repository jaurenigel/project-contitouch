// dependencies
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();

// passport config

require('./config/passport') (passport);

// Database config

const db = require('./config/keys').MongoURI;

// Connect to MongoDb with mongoose

mongoose.connect(db, { useNewUrlParser:true })
    .then(() => console.log('MongoDB connected.....'))
    .catch(err => console.log(err));

// static files

app.use(express.static(__dirname + '/public'));

// EJS

app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser

app.use(express.urlencoded( {extended: false} ));

// Passport

app.use(passport.initialize());
app.use(passport.session());

// Routes

app.use('/', require('./routes/index'));
app.use('/admin', require('./routes/admin'));
app.use('/supplier', require('./routes/supplier'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server started at PORT ${PORT}`));
