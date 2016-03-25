'use strict';

angular.module('sinsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        abstract:true,
        url: '',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
        

      });
  });
