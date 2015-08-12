angular.module('myApp.directives.plane-form', [])
  .directive('planeForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/plane-form.html',
      controller: ['$scope', 'Plane', function ($scope, Plane) {

        $scope.plane = Plane.plane;

      }]
    };
  });