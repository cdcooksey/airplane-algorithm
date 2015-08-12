angular.module('myApp.directives.header', [])
  .directive('header', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/header.html'
    };
  });