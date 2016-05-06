'use strict';

//handle reset password
class ResetController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  message = '';
  //end-non-standard

  constructor(Auth, $state, $http) {
    this.Auth = Auth;
    this.$state = $state;
    this.$http = $http;
    //this.message='';
  }

  reset(form) {
    this.submitted = true;

    if (form.$valid) {
      this.$http.get('/resetpassword/' + this.user.email).then((res) =>{
        this.message = 'Your password has been reset, check your email for your new password.';
      }, (res)=> {
        this.message = 'Error occur while resetting your password, please contact the administrator.';
      });
      // this.Auth.forget({
      //   name: this.user.name,
      //   email: this.user.email,
      // })
      // .then(() => {
      //   // Account created, redirect to home
      //   this.$state.go('dash.main');
      // })
      // .catch(err => {
      //   err = err.data;
      //   this.errors = {};
      //
      //   // Update validity of form fields that match the mongoose errors
      //   angular.forEach(err.errors, (error, field) => {
      //     form[field].$setValidity('mongoose', false);
      //     this.errors[field] = error.message;
      //   });
      // });
    }
  }
}

angular.module('sinsApp')
  .controller('ResetController', ResetController);
