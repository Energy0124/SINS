'use strict';

angular.module('sinsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dash', {
        abstract: true,
        url: '',
        templateUrl: 'app/dash/dash.html',
        controller: 'DashCtrl',
        controllerAs: 'vm',
      });
  });
