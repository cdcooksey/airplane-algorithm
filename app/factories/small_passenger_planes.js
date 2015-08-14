angular.module('myApp.factories.SmallPassengerPlane', [])
  .factory('SmallPassengerPlane', [function(){

    /**
     * Describe the size attributes of a Large Passenger plane.
     * @type {{id: number, name: string}}
     */
    var size = { id: 2, name: 'Small' };

    /**
     * Describe the type attributes of a Large Passenger plane.
     * @type {{id: number, name: string}}
     */
    var type = { id: 1, name: 'Passenger' };

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