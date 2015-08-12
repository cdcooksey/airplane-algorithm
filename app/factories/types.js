angular.module('myApp.factories.Types', [])
  .factory('Types', [function(){
    var types = [
      { id: 1,
        name: 'Passenger' },
      { id: 2,
        name: 'Cargo' }
    ];
    return {types : types }
  }]);