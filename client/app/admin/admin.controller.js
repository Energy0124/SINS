'use strict';

(function () {

  class AdminController {
    constructor(User, Game) {
      // Use the User $resource to fetch all users
      this.users = User.query();
      this.games = Game.query();
      this.game = {};
      this.message = "";
      this.Game = Game;
    }

    addGame(form) {
      this.Game.save(this.game, function () {
        //this.message = "success";
      }, function () {
        //this.message = "failed"
      });
    }

    deleteGame(game) {
      game.$remove();
      this.games.splice(this.games.indexOf(game), 1);
    }

    delete(user) {
      user.$remove();
      this.users.splice(this.users.indexOf(user), 1);
    }
  }

  angular.module('sinsApp.admin')
    .controller('AdminController', AdminController);

})();
