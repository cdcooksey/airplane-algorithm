angular.module('myApp.directives.plane-form', [])
  .directive('planeForm', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/plane-form.html',
      controller: ['$scope', 'Plane', function ($scope, Plane) {

        /**
         * Pulls an object containing all possible
         * sizes and types from factories/plane.js
         * @type {plane}
         */
        $scope.plane = Plane.plane;

      }]
    };
  });