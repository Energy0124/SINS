'use strict';

angular.module('sinsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('view', {
        abstract: true,
        url: '',
        //templateUrl: 'app/view/view.html',
        //templateUrl: 'app/index.html',
        template:'<div ui-view layout="row" layout-fill></div>',
        //controller: 'ViewCtrl'
      })
  });
