'use strict';

angular.module('sinsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('view.dash.table', {
        url: '/table',
        templateUrl: 'app/table/table.html',
        controller: 'TableCtrl',
        controllerAs: 'vm',
        data: {
          title: 'Table'
        }
      });
  });
