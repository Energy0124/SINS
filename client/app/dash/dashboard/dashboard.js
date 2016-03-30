'use strict';

angular.module('sinsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dash.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dash/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        data: {
          title: 'Dashboard'
        }
        //abstract:true
      });
  });
