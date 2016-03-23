'use strict';

angular.module('sinsApp.auth', [
  'sinsApp.constants',
  'sinsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
