'use strict';

angular.module('sinsApp')
  .factory('Game', function ($resource) {

    return $resource("/api/games/:id", {
      id: '@_id'
    }, {
      'update': {method: 'PUT'}
    });
  });
