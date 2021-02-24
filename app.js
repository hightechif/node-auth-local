const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const morgan = require('morgan');
const passport = require('./lib/passport');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Menggunakan Middleware Session
app.use(session({
  secret: "Binar Secret",
  resave: false,
  saveUninitialized: false
}))

// Menggunakan Middleware Passport
app.use(passport.initialize());
app.use(passport.session())

// Flash. Flash ini membutuhkan Session
app.use(flash());

app.set('view engine', 'ejs');

// Routing
const router = require('./routes/index.routes');
app.use(router);

module.exports = app;
