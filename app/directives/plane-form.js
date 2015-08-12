angular.module('myApp.directives.plane-form', [])
  .directive('planeForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/plane-form.html'
    };
  });