angular.module('myApp.factories.PlaneQueue', [])
  .factory('PlaneQueue', ['LargePassengerPlane', 'LargeCargoPlane', 'SmallPassengerPlane', 'SmallCargoPlane',
    function(LargePassengerPlane, LargeCargoPlane, SmallPassengerPlane, SmallCargoPlane){

    return {

      queue: function() {
        var planeList = [];

        // Fetch queues for all aircraft types.
        var largePassengers = LargePassengerPlane.queue;
        var largeCargos = LargeCargoPlane.queue;
        var smallPassengers = SmallPassengerPlane.queue;
        var smallCargos = SmallCargoPlane.queue;

        // Flatten into single array. Load in order of priority.
        planeList = planeList.concat.apply(planeList, largePassengers);
        planeList = planeList.concat.apply(planeList, smallPassengers);
        planeList = planeList.concat.apply(planeList, largeCargos);
        planeList = planeList.concat.apply(planeList, smallCargos);

        return planeList;
      },

      add: function(plane) {
        // Determine what type of plane we have. Load in order of priority.

        // Large Passenger Plane
        if(plane.size.id === LargePassengerPlane.size.id && plane.type.id === LargePassengerPlane.type.id) {
          return LargePassengerPlane.add(plane);
        }

        // Small Passenger Plane
        if(plane.size.id === SmallPassengerPlane.size.id && plane.type.id === SmallPassengerPlane.type.id) {
          return SmallPassengerPlane.add(plane);
        }

        // Large Cargo Plane
        if(plane.size.id === LargeCargoPlane.size.id && plane.type.id === LargeCargoPlane.type.id) {
          return LargeCargoPlane.add(plane);
        }

        // Small Cargo Plane
        if(plane.size.id === SmallCargoPlane.size.id && plane.type.id === SmallCargoPlane.type.id) {
          return SmallCargoPlane.add(plane);
        }

      },

      remove: function() {

      }
    };

  }]);