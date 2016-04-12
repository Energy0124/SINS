'use strict';

angular.module('sinsApp')
  .controller('WikiCtrl', function ($scope, Article) {
    $scope.message = 'Hello';
    $scope.editEnabled = false;
    $scope.GameWikiContent = Article.query()[0];
    
    $scope.editGameWiki = function(){
      $scope.editEnabled = true;
      $scope.editableContent = $scope.GameWikiContent;
    };
    
    $scope.cancelGameWiki = function(){
      $scope.editEnabled = false;
    };
    
    $scope.saveGameWiki = function(){
      $scope.GameWikiContent = $scope.editableContent;
      var wiki = Article.query(function() {
      wiki[0].info = $scope.editableContent;
      wiki[0].$save();
      });
      $scope.cancelGameWiki();
    };
    
  });


