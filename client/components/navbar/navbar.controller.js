'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'home.main'
  }, {
    'title': 'Lobby',
    'state': 'home.lobby'
  },{
    'title': 'Wiki',
    'state': 'home.wiki'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('sinsApp')
  .controller('NavbarController', NavbarController);
