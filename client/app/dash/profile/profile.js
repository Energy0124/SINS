'use strict';

angular.module('sinsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dash.profile', {
        url: '/profile/:id',
        templateUrl: 'app/dash/profile/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'vm',
        data: {
          title: 'Profile'
        }
      });
  });
