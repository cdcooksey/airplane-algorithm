angular.module('myApp.factories.PlaneTypes', [])
  .factory('PlaneTypes', ['Sizes', 'Types', function(Sizes, Types){
    var plane = {
      types: Types.types,
      sizes: Sizes.sizes
    };
    return { plane : plane }
  }]);