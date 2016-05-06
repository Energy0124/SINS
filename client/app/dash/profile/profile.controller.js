
//handle user profile
(function () {

  angular
    .module('sinsApp')
    .controller('ProfileCtrl', [
      "$resource",
      "Auth",
      "$stateParams",
      "$log",
      "User",
      "$scope",
      ProfileController
    ]);

  function ProfileController($resource, Auth, $stateParams, $log, User, $scope) {
    var vm = this;
    // vm.user = Auth.getCurrentUser();
    $scope.user = {};
    //user
    $scope.isSelf = false;
    $log.log($stateParams);
    User.show({id: $stateParams.id}, function (user) {
      //vm.user =user;
      $scope.user = user;
      /*User.get(function (me) {
        $scope.me = me;
        $scope.toggleFriend = function () {
          if (user.friends.indexOf(me._id) == -1) {
            me.friends.push(user._id);
            User.update({id: me._id}, me);
          }
        }
      });*/


      if ($stateParams.id == $scope.user._id) {
        $scope.isSelf = true;
      } else {
        $scope.isSelf = false;
      }

      /*if ($scope.isSelf) {
        $scope.friendText = "";
      } else if ($scope.user.friends.indexOf($stateParams.id) == -1) {
        $scope.friendText = "Add Friend";
      } else {
        $scope.friendText = "Unfriend";
      }*/
      //$scope.$apply();

    });

    //vm.id=


    /*    vm.user = {
     title: 'Admin',
     email: 'contact@flatlogic.com',
     firstName: '',
     lastName: '' ,
     company: 'FlatLogic Inc.' ,
     address: 'Fabritsiusa str, 4' ,
     city: 'Minsk' ,
     state: '' ,
     biography: 'We are young and ambitious full service design and technology company. ' +
     'Our focus is JavaScript development and User Interface design.',
     postalCode : '220007'
     };*/
  }

})();
