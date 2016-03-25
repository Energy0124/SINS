'use strict';

describe('Service: todoListService', function () {

  // load the service's module
  beforeEach(module('sinsApp'));

  // instantiate service
  var todoListService;
  beforeEach(inject(function (_todoListService_) {
    todoListService = _todoListService_;
  }));

  it('should do something', function () {
    expect(!!todoListService).toBe(true);
  });

});
