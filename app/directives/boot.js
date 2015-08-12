angular.module('myApp.directives.boot', [])
  .directive('boot', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/boot.html',
      controller: ['$scope', function($scope){

        $scope.boot = false;

        $scope.toggleBoot = function()
        {
          if(!$scope.boot) {
            $scope.boot = true;
          } else {
            $scope.boot = false;
          }
        }

      }]
    };
  });