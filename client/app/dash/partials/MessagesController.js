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
    vm.Auth=Auth;

    //this.awesomeThings = [];
    vm.scrollToChatBottom = function () {
      var height = 0;
      height = $('#chat-md-list').height();
      height += '';
      $('md-content.messages-content').animate({scrollTop: height});
    };

    $http.get('/api/messages').then(response => {
      //this.awesomeThings = response.data;
      vm.messages = response.data;
      socket.syncUpdates('message', vm.messages, vm.scrollToChatBottom );

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
          text: vm.newMessage,
          userName: vm.Auth.getCurrentUser().name,
          imagePath: vm.Auth.getCurrentUser().imagePath
        });
        vm.newMessage = '';
      }

      vm.scrollToChatBottom();
    }
  }

})();
