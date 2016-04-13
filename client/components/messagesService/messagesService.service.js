(function(){
  'use strict';

  angular.module('sinsApp')
    .service('messagesService', [
      '$q',
      messagesService
    ]);

  function messagesService($q){
    var messages = [
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'Electromagnetic radiation',
        userName: 'Wilhelm Conrad Röntgen',
        date: '1901',
        text: 'In recognition of the extraordinary services he has rendered by the discovery of the remarkable rays subsequently named after him'
      },
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'Quantum theory',
        userName: 'Max Planck',
        date: '1918',
        text: 'Fucking Hay.'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(messages);
      }
    };
  }

})();
