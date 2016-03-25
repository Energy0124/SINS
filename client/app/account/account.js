'use strict';

angular.module('sinsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('home.login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('home.logout', {
        url: '/logout?referrer',
        referrer: 'home.main',
        template: '',
        controller: function($state, Auth) {
          var referrer = $state.params.referrer ||
                          $state.current.referrer ||
                          'home.main';
          Auth.logout();
          $state.go(referrer);
        }
      })
      .state('home.signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupController',
        controllerAs: 'vm'
      })
      .state('home.settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'vm',
        authenticate: true
      });
  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
      if (next.name === 'home.logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
      }
    });
  });
