'use strict';

angular.module('sinsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home.wiki', {
        url: '/wiki',
        templateUrl: 'app/wiki/wiki.html',
        controller: 'WikiCtrl'
      });
  });
