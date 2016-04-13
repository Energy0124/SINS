'use strict';

class LoginController {
  constructor(Auth, $state,$log,$http, $cookies) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
    this.$log=$log;
    this.$http=$http;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {


      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        // Logged in, redirect to home
        this.$state.go('dash.main');
      })
      .catch(err => {
        this.errors.other = err.message;
        //this.$log.log(err);
      });
    }
    
  }
}

angular.module('sinsApp')
  .controller('LoginController', LoginController);
