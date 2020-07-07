var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
var bodyParser = require('body-parser');
var cors = require('cors');

//Routes
var userRouter = require('./routes/user');
var insuranceRouter = require('./routes/insurance');
var businessRouter = require('./routes/business');
var productRouter = require('./routes/product');
var coverRouter = require('./routes/cover');
var formRouter = require('./routes/form');

var app = express();

//Setting body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

//Getting environment variables
dotenv.config();

//Database setup
var mongoDB = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD 
              + '@ds263028.mlab.com:63028/' + process.env.DB_NAME;
mongoose.connect(mongoDB, {useNewUrlParser: true,useUnifiedTopology: true});

var connection = mongoose.connection;
connection.on('error', () => console.log('EROR CONNECTING DATABASE'));
connection.once('open', () => console.log('CONNECTION WITH DATABASE SUCCESS'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Using routes
app.use('/user', userRouter);
app.use('/insurance', insuranceRouter);
app.use('/business', businessRouter);
app.use('/product', productRouter);
app.use('/cover', coverRouter);
app.use('/form', formRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
