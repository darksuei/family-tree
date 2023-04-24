var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require("dotenv").config();
var connectDB = require("./db/connect");
var cors = require("cors");

var authRouter = require('./routes/auth');
var indexRouter = require('./routes/index');
var treeRouter = require('./routes/family_tree');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var displayRouter = require('./routes/display');
var inputformRouter = require('./routes/inputform');
var getdataRouter = require('./routes/getData');
var defaulttreeRouter = require('./routes/default_family_tree');
var treesearchRouter = require('./routes/family_tree_search');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/', treeRouter);
app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/', authRouter);
app.use('/', displayRouter);
app.use('/', inputformRouter);
app.use('/', getdataRouter);
app.use('/', defaulttreeRouter);
app.use('/', treesearchRouter);

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
