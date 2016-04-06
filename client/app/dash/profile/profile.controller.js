(function(){

  angular
    .module('sinsApp')
    .controller('ProfileCtrl', [
      "$resource",
      "Auth",
      ProfileController
    ]);

  function ProfileController($resource,Auth,$scope) {
    var vm = this;

    vm.user=Auth.getCurrentUser();

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
