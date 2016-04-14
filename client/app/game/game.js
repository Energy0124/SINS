'use strict';

angular.module('sinsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dash.game', {
        url: '/game',
        templateUrl: 'app/game/game.html',
        controller: 'GameCtrl',
        controllerAs: 'vm',
        data: {
          title: 'Games'
        }
      });
  });
