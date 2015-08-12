angular.module('myApp.factories.Plane', [])
  .factory('Plane', ['Sizes', 'Types', function(Sizes, Types){
    var plane = {
      types: Types.types,
      sizes: Sizes.sizes
    };
    return { plane : plane }
  }]);