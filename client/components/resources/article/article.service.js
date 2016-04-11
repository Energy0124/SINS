'use strict';

angular.module('sinsApp')
  .factory('Article', function ($resource) {

    return $resource("/api/article/:id", {
      id: '@_id'
    }, {
      'update': {method: 'PUT'}
    });
  });
