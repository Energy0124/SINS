'use strict';

angular.module('sinsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.lobby', {
        url: '/lobby',
        templateUrl: 'app/lobby/lobby.html',
        controller: 'LobbyCtrl'
      });
  });
