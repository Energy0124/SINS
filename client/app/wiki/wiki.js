'use strict';

angular.module('sinsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dash.wiki', {
        url: '/wiki',
        templateUrl: 'app/wiki/wiki.html',
        controller: 'WikiCtrl',
        data: {
          title: 'Wiki'
        }
      });
  });

function GameWikiEdit($scope){
  $scope.content = "hey";
  $scope.editEnabled = false;
    
  $scope.editGameWiki = function(){
    $scope.editEnabled = true;
    $scope.editableContent = $scope.content;
  };
    
  $scope.cancelGameWiki = function(){
    $scope.editEnabled = false;
  };
    
  $scope.saveGameWiki = function(){
    $scope.content = $scope.editableContent;
    $scope.cancelGameWiki();
  };
}