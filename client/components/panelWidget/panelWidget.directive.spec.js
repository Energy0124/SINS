'use strict';

describe('Directive: panelWidget', function () {

  // load the directive's module and view
  beforeEach(module('sinsApp'));
  beforeEach(module('components/panelWidget/panelWidget.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<panel-widget></panel-widget>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the panelWidget directive');
  }));
});
