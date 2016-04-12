'use strict';

angular.module('sinsApp')
  .controller('WikiCtrl', function ($scope, Article,$sce) {
    $scope.message = 'Hello';
    $scope.editEnabled = false;
    $scope.GameWikiContent = Article.query(function (articles) {
      $scope.htmlVariable=articles[0].info;;
      $scope.GameWikiContent=articles[0].info;
      //$scope.$apply();
    });


    $scope.editGameWiki = function () {
      $scope.editEnabled = true;
      $scope.editableContent = $scope.GameWikiContent;
    };

    $scope.cancelGameWiki = function () {
      $scope.editEnabled = false;
    };

    $scope.saveGameWiki = function () {

      var wiki = Article.query(function () {
        var article=wiki[0];
       // article.info = $scope.editableContent;
        article.info = $scope.htmlVariable;
        $scope.editableContent= $scope.htmlVariable;
        $scope.GameWikiContent = $scope.editableContent;

        Article.update({id: wiki[0]._id},article);
        //$scope.$apply();
        //wiki[0].$save();
      });
      $scope.cancelGameWiki();
    };

  });


