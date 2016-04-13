(function() {
  'use strict';

  angular
    .module('sinsApp')
    .directive('messagesSection', messagesSectionDirective);

  function messagesSectionDirective() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        theme: '@',
        messages: '='
      },
      template: '' +
      '<md-content flex>' +
      /*'  <md-subheader ng-class="theme">{{title}}</md-subheader>' +*/
      '  <md-list id="chat-md-list">' +
      '    <md-list-item class="md-3-line" ng-repeat="message in messages">' +
      '    <img class="md-avatar" ng-src="{{message.imagePath}}">' +
      '    <div class="md-list-item-text">' +
      /*'      <h3>{{message.subject}}</h3>' +*/
      '      <h3>{{message.userName}}</h3>' +
      '      <p>{{message.text}}</p>' +
      '    </div>' +
      '    <md-divider>' +
      '    </md-list-item>' +
      '  </md-list>' +
      '</md-content>',
      link : function(scope, element, attrs) {
      }
    };
  }
})();
