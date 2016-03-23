'use strict';

describe('Controller: WikiCtrl', function () {

  // load the controller's module
  beforeEach(module('sinsApp'));

  var WikiCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WikiCtrl = $controller('WikiCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
