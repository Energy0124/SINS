'use strict';

angular.module('sinsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dash.table', {
        url: '/table',
        templateUrl: 'app/dash/table/table.html',
        controller: 'TableCtrl',
        controllerAs: 'vm',
        data: {
          title: 'Table'
        }
      });
  });
