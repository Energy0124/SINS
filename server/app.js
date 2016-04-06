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
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

// Populate databases with sample data
if (config.seedDB) { require('./config/seed'); }

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
var sendPW=require('./mail');
app.get('/resetpassword/:email', function (req, res) {
  console.log('Email:', req.params.email);
  sendPW.sendMail(req.params.email);
  res.send(req.params.email);
});


require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);




// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function() {
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
