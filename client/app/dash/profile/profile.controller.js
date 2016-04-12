(function () {

  angular
    .module('sinsApp')
    .controller('ProfileCtrl', [
      "$resource",
      "Auth",
      "$stateParams",
      "$log",
      ProfileController
    ]);

  function ProfileController($resource, Auth, $stateParams, $log, $scope) {
    var vm = this;
    vm.user = Auth.getCurrentUser();

    vm.isSelf = false;
    $log.log($stateParams);

    //vm.id=
    if ($stateParams.id == vm.user._id) {
      vm.isSelf = true;
    } else {
      vm.isSelf = false;
    }

    if (vm.isSelf) {
      vm.friendText = "";
    } else if (vm.user.friends.indexOf($stateParams.id) == -1) {
      vm.friendText = "Add Friend";
    } else {
      vm.friendText = "Unfriend";
    }


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
