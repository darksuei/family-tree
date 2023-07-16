var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

require("dotenv").config();
var connectDB = require("./db/connect");
var cors = require("cors");

var app = express();
app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: false,
  // cookie: {
  //   maxAge: 0
  // }
}));

var authRouter = require('./routes/auth');
var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var registerRouter = require('./routes/register');
var successRouter = require('./routes/success');
var editRouter = require('./routes/display');
var getdataRouter = require('./routes/getData');
var defaulttreeRouter = require('./routes/default_family_tree');
var treesearchRouter = require('./routes/family_tree_search');


console.log(`Session secret: ${process.env.SESSION_SECRET}`);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/', loginRouter);
app.use('/', logoutRouter);
app.use('/', registerRouter);
app.use('/', authRouter);
app.use('/', successRouter);
app.use('/', editRouter);
app.use('/', getdataRouter);
app.use('/', defaulttreeRouter);
app.use('/', treesearchRouter);
app.use('/', aboutRouter);

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
  res.render('error');
});


module.exports = app;
