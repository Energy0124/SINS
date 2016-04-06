'use strict';

class ResetController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  //end-non-standard

  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
  }

  reset(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.forget({
        name: this.user.name,
        email: this.user.email,
      })
      .then(() => {
        // Account created, redirect to home
        this.$state.go('dash.main');
      })
      .catch(err => {
        err = err.data;
        this.errors = {};

        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.errors, (error, field) => {
          form[field].$setValidity('mongoose', false);
          this.errors[field] = error.message;
        });
      });
    }
  }
}

angular.module('sinsApp')
  .controller('ResetController', ResetController);
