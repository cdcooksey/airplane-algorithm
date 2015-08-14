angular.module('myApp.factories.LargeCargoPlane', [])
  .factory('LargeCargoPlane', [function(){

    /**
     * Describe the size attributes of a Large Passenger plane.
     * @type {{id: number, name: string}}
     */
    var size = { id: 1, name: 'Large' };

    /**
     * Describe the type attributes of a Large Passenger plane.
     * @type {{id: number, name: string}}
     */
    var type = { id: 2, name: 'Cargo' };

    var queue = []; // Populate list of planes on demand.

    return {
      size: size,
      type: type,
      queue: queue,

      add: function(plane) {
        var currentTime = new Date().getTime();
        queue.push({
          size: plane.size,
          type: plane.type,
          datetime: currentTime })
      },

      remove: function() {
      }

    };

  }]);