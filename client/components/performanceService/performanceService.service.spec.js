'use strict';

describe('Service: performanceService', function () {

  // load the service's module
  beforeEach(module('sinsApp'));

  // instantiate service
  var performanceService;
  beforeEach(inject(function (_performanceService_) {
    performanceService = _performanceService_;
  }));

  it('should do something', function () {
    expect(!!performanceService).toBe(true);
  });

});
