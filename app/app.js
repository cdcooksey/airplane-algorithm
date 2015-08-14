'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'myApp.directives.header',
  'myApp.directives.boot',
  'myApp.directives.plane-form',
  'myApp.directives.queue-list',
  'myApp.directives.queue-count',
  'myApp.factories.PlaneTypes',
  'myApp.factories.Sizes',
  'myApp.factories.Types',
  'myApp.factories.LargePassengerPlane',
  'myApp.factories.LargeCargoPlane',
  'myApp.factories.SmallPassengerPlane',
  'myApp.factories.SmallCargoPlane',
  'myApp.factories.PlaneQueue'
])