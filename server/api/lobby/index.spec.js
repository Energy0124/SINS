'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var lobbyCtrlStub = {
  index: 'lobbyCtrl.index',
  show: 'lobbyCtrl.show',
  create: 'lobbyCtrl.create',
  update: 'lobbyCtrl.update',
  destroy: 'lobbyCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var lobbyIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './lobby.controller': lobbyCtrlStub
});

describe('Lobby API Router:', function() {

  it('should return an express router instance', function() {
    lobbyIndex.should.equal(routerStub);
  });

  describe('GET /api/lobbies', function() {

    it('should route to lobby.controller.index', function() {
      routerStub.get
        .withArgs('/', 'lobbyCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/lobbies/:id', function() {

    it('should route to lobby.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'lobbyCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/lobbies', function() {

    it('should route to lobby.controller.create', function() {
      routerStub.post
        .withArgs('/', 'lobbyCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/lobbies/:id', function() {

    it('should route to lobby.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'lobbyCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/lobbies/:id', function() {

    it('should route to lobby.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'lobbyCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/lobbies/:id', function() {

    it('should route to lobby.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'lobbyCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
