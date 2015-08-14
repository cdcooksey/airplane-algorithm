angular.module('myApp.directives.queue-count', [])
  .directive('queueCount', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/queue-count.html',
      controller: ['$scope', 'PlaneQueue', function ($scope, PlaneQueue) {

        // Aircraft queue starts out empty.
        $scope.queue = [];

      }]
    };
  });