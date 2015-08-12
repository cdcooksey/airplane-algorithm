angular.module('myApp.factories.Sizes', [])
  .factory('Sizes', [function(){
    var sizes = [
      { id: 1,
        name: 'Large' },
      { id: 2,
        name: 'Small' }
    ];
    return {sizes : sizes}
  }]);