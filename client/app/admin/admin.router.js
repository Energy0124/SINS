'use strict';

angular.module('sinsApp.admin')
  .config(function($stateProvider) {
    $stateProvider
      .state('home.admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin',
        authenticate: 'admin'
      });
  });
