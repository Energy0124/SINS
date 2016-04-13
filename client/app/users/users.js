'use strict';

angular.module('sinsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dash.users', {
        url: '/users',
        templateUrl: 'app/users/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'vm',
        data: {
          title: 'Users'
        }
      });
  });
