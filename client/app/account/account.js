'use strict';

//router for login related function
angular.module('sinsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('dash.login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        data: {
          title: 'Login'
        }
      })
      .state('dash.logout', {
        url: '/logout?referrer',
        referrer: 'dash.main',
        template: '',
        controller: function($state, Auth) {
          var referrer = $state.params.referrer ||
                          $state.current.referrer ||
                          'dash.main';
          Auth.logout();
          //window.location.reload(true);
          $state.go(referrer);
        },
        data: {
          title: 'Logout'
        }
      })
      .state('dash.signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupController',
        controllerAs: 'vm',
        data: {
          title: 'Register'
        }
      })
      .state('dash.reset', {
        url: '/reset',
        templateUrl: 'app/account/reset/reset.html',
        controller: 'ResetController',
        controllerAs: 'vm',
        data: {
          title: 'Reset'
        }
      })
      .state('dash.settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'vm',
        authenticate: true,
        data: {
          title: 'Settings'
        }
      });
  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
      if (next.name === 'dash.logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
      }
    });
  });
