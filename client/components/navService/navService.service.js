(function () {
  'use strict';

  angular.module('sinsApp')
    .service('navService', [
      'Auth', '$q',
      navService
    ]);

  function navService(Auth, $q) {
    var menuItems = [
      {
        name: 'Home',
        icon: 'home',
        sref: '.main'
      },
      {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Profile',
        icon: 'person',
        sref: '.profile'
      },

      {
        name: 'Lobby',
        icon: 'layers',
        sref: '.lobby'
      },
      {
        name: 'Wiki',
        icon: 'info',
        sref: '.wiki'
      },
      {
        name: 'Table',
        icon: 'view_module',
        sref: '.table'
      },
      {
        name: 'Login',
        icon: 'help',
        sref: '.login'
      },
      {
        name: 'Logout',
        icon: 'help',
        sref: '.logout'
      },
      {
        name: 'Admin',
        icon: 'help',
        sref: '.admin'
      }
    ];
    /*
     if (Auth.isAdmin()){
     vm.menuItems.push(
     {
     name: 'Admin',
     icon: 'help',
     sref: '.admin'
     })
     }*/

    return {
      loadAllItems: function () {
        return $q.when(menuItems);
      }
    };
  }

})();
