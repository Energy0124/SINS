'use strict';

angular.module('sinsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('layout', {
        abstract: true,
        url: '',
        templateUrl: 'app/layout/layout.html',
        controller: 'LayoutCtrl'
      });
  });
