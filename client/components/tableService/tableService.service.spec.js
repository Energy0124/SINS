'use strict';

describe('Service: tableService', function () {

  // load the service's module
  beforeEach(module('sinsApp'));

  // instantiate service
  var tableService;
  beforeEach(inject(function (_tableService_) {
    tableService = _tableService_;
  }));

  it('should do something', function () {
    expect(!!tableService).toBe(true);
  });

});
