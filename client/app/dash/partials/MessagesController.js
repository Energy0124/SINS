(function () {

  angular
    .module('sinsApp')
    .controller('MessagesController', [
      'messagesService',
      '$http',
      'socket',
      '$scope',
      'Auth',
      MessagesController
    ]);

  function MessagesController(messagesService, $http, socket, $scope, Auth) {
    var vm = this;

    vm.messages = [];
    vm.$http = $http;
    vm.user = Auth.getCurrentUser();

    //this.awesomeThings = [];

    $http.get('/api/messages').then(response => {
      //this.awesomeThings = response.data;
      vm.messages = response.data;
      socket.syncUpdates('message', vm.messages);

    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('message');
    });

    messagesService
      .loadAllItems()
      .then(function (messages) {
        vm.messages = [].concat(messages);
      });

    vm.addMessage = function () {
      if (vm.newMessage) {
        vm.$http.post('/api/messages', {
          text: vm.newMessage ,
          userName: vm.user.name,
          imagePath: vm.user.imagePath
        });
        vm.newMessage = '';
      }
    }
  }

})();
