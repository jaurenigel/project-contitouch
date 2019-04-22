// dependencies
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

// static files
app.use(express.static(__dirname + '/public'));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes

app.use('/', require('./routes/index'));
app.use('/admin', require('./routes/admin'));
app.use('/supplier', require('./routes/supplier'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server started at PORT ${PORT}`));
