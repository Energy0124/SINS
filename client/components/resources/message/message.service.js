'use strict';

angular.module('sinsApp')
  .factory('message', function ($resource) {

    return $resource("/api/messages/:id", {
      id: '@_id'
    }, {
      'update': {method: 'PUT'}
    });
  });
