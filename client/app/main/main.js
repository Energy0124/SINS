'use strict';

angular.module('sinsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('home.main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  });
