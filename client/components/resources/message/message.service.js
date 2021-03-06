'use strict';

angular.module('sinsApp')
  .factory('Message', function ($resource) {

    return $resource("/api/messages/:id", {
      id: '@_id'
    }, {
      'update': {method: 'PUT'}
    });
  });
