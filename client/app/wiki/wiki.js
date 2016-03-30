'use strict';

angular.module('sinsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('layout.wiki', {
        url: '/wiki',
        templateUrl: 'app/wiki/wiki.html',
        controller: 'WikiCtrl'
      });
  });
