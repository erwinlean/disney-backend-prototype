'use strict';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const jsonWebT = require ("./config/jwt"); 
const bodyParser = require('body-parser');

//routes enlaces
const indexRouter = require('./routes/index');
const usersRouter = require("./routes/users");
const characterRouter = require("./routes/characters");
const genderRouter = require("./routes/gender")
const moviesRouter = require ("./routes/films");
const seriesAndFilmsRouter = require ("./routes/films");


var app = express();

//db
require("./config/db.js");


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//bodyParser - codify url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/', indexRouter);
app.use("/users", usersRouter);
app.use("/characters",characterRouter);
app.use("/gender",genderRouter);
app.use("/movies",moviesRouter);
app.use("/seriesAndFilms",seriesAndFilmsRouter);

//json web tocken
app.jsonwebtocken = jsonWebT;
app.use(function(req, res, next) {
  next(createError(404));
}); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error: '+ err + ' - status: ' + err.status);
});

module.exports = app;