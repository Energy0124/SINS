'use strict';

angular.module('sinsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dash.lobby', {
        url: '/lobby',
        templateUrl: 'app/lobby/lobby.html',
        controller: 'LobbyCtrl',
          controllerAs: 'vm',
        data: {
          title: 'Lobby'
        }
      })
      
        .state('dash.create', {
        url: '/create',
        templateUrl: 'app/lobby/create.html',
        controller: 'LobbyCreateController',
        controllerAs: 'vm',
        data: {
          title: 'Create Lobby'
        }
      });
  });
