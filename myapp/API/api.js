var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('./Utilities/db');
var app = express();
var users = require('./routes/routeUsers');



//CONNECT TO DATABASE
db.connect('mongodb://admin:admin@ds131099.mlab.com:31099/fitnesstracker', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
      console.log("Mongo Connected")
  }
})

app.use('/users', users);


module.exports = app;