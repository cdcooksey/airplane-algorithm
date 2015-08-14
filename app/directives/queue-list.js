angular.module('myApp.directives.queue-list', [])
  .directive('queueList', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/queue-list.html',
      controller: ['$scope', 'PlaneQueue', function ($scope, PlaneQueue) {

        // Aircraft queue starts out empty.
        $scope.queue = [];

        // Reusable method to update list.
        $scope.updateQueueList = function() {
          $scope.queue = PlaneQueue.queue();
        };

        // Adds new aircraft into queue list.
        $scope.enqueue = function (plane) {
          PlaneQueue.add(plane);
          $scope.updateQueueList();
        };

        // Removes highest priority aircraft from queue.
        $scope.dequeue = function () {
          console.log('TODO: removing plane');
          $scope.updateQueueList();
        };

      }]
    };
  });