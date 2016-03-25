'use strict';

describe('Directive: messagesSection', function () {

  // load the directive's module and view
  beforeEach(module('sinsApp'));
  beforeEach(module('app/messagesSection/messagesSection.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<messages-section></messages-section>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the messagesSection directive');
  }));
});
