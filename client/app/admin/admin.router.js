'use strict';

//routing for admin page
angular.module('sinsApp.admin')
  .config(function($stateProvider) {
    $stateProvider
      .state('dash.admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin',
        authenticate: 'admin',
        data: {
          title: 'Admin'
        }
      });
  });
