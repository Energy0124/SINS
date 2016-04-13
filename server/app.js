/**
 * Main application file
 */

'use strict';

import express from 'express';
import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import sqldb from './sqldb';
import config from './config/environment';
import http from 'http';


// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function (err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

// Populate databases with sample data
if (config.seedDB) {
  require('./config/seed');
}

// Setup server
var app = express();
var server = http.createServer(app);
var socketio = require('socket.io')(server, {
  serveClient: config.env !== 'production',
  path: '/socket.io-client'
});

//var bodyParser = require('body-parser');
//app.use(bodyParser());
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// app.use(bodyParser.json()); // support json encoded bodies
//app.use(express.json());       // to support JSON-encoded bodies
//app.use(express.urlencoded()); // to support URL-encoded bodies


//send reset new pw
var sendPW = require('./mail');
app.get('/resetpassword/:email', function (req, res) {
  console.log('Email:', req.params.email);
  sendPW.sendMail(req.params.email, function (info) {
    res.send(req.params.email + 'sent success: ' + info);
  }, function (err) {
    console.log('Error: ' + err);
    res.status(403).send(err);

  });

});
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/** Serving from the same express Server
 No cors required */
//app.use(express.static('../client'));
app.use(bodyParser.json());

var storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
  }
});

var upload = multer({ //multer settings
  storage: storage
}).single('file');

/** API path that will upload the files */
app.post('/upload', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      res.json({error_code: 1, err_desc: err});
      return;
    }
    res.json({error_code: 0, err_desc: null});
  })

});


require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);


// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

/*
 sqldb.sequelize.sync()
 .then(startServer)
 .catch(function(err) {
 console.log('Server failed to start due to error: %s', err);
 });
 */


try {
  startServer()
} catch (err) {
  console.log('Server failed to start due to error: %s', err);
}

// Expose app
exports = module.exports = app;
