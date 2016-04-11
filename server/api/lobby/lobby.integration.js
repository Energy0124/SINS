'use strict';

var app = require('../..');
import request from 'supertest';

var newLobby;

describe('Lobby API:', function() {

  describe('GET /api/lobbies', function() {
    var lobbys;

    beforeEach(function(done) {
      request(app)
        .get('/api/lobbies')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          lobbys = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      lobbys.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/lobbies', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/lobbies')
        .send({
          name: 'New Lobby',
          info: 'This is the brand new lobby!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newLobby = res.body;
          done();
        });
    });

    it('should respond with the newly created lobby', function() {
      newLobby.name.should.equal('New Lobby');
      newLobby.info.should.equal('This is the brand new lobby!!!');
    });

  });

  describe('GET /api/lobbies/:id', function() {
    var lobby;

    beforeEach(function(done) {
      request(app)
        .get('/api/lobbies/' + newLobby._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          lobby = res.body;
          done();
        });
    });

    afterEach(function() {
      lobby = {};
    });

    it('should respond with the requested lobby', function() {
      lobby.name.should.equal('New Lobby');
      lobby.info.should.equal('This is the brand new lobby!!!');
    });

  });

  describe('PUT /api/lobbies/:id', function() {
    var updatedLobby;

    beforeEach(function(done) {
      request(app)
        .put('/api/lobbies/' + newLobby._id)
        .send({
          name: 'Updated Lobby',
          info: 'This is the updated lobby!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedLobby = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedLobby = {};
    });

    it('should respond with the updated lobby', function() {
      updatedLobby.name.should.equal('Updated Lobby');
      updatedLobby.info.should.equal('This is the updated lobby!!!');
    });

  });

  describe('DELETE /api/lobbies/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/lobbies/' + newLobby._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when lobby does not exist', function(done) {
      request(app)
        .delete('/api/lobbies/' + newLobby._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
