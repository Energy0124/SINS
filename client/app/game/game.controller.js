'use strict';


angular.module('sinsApp')
  .controller('GameCtrl', function ($scope,Game) {
    $scope.message = 'Hello';
    $scope.games=Game.query();
  });
