'use strict';

angular.module('sinsApp')
  .controller('UsersCtrl', function ($scope,User) {
    $scope.message = 'Hello';
    $scope.users=User.query();
  });
