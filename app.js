// dependencies
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');

const app = express();

// passport config for admin

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
app.use(express.json());


// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

// Passport

app.use(passport.initialize());
app.use(passport.session());


// Routes

app.use('/', require('./routes/index'));
app.use('/admin', require('./routes/admin'));
app.use('/api', require('./routes/api/quote'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server started at PORT ${PORT}`));
