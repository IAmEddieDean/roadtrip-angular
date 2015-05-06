'use strict';

angular.module('roadtrip')
.controller('TripsListCtrl', function($scope, $state, Trip, $window){
  Trip.find()
  .then(function(response){
    $scope.trips = response.data.trips;
  });
  $scope.destroy = function(trip){
    Trip.destroy(trip)
    .then(function(response){
      var trip = response.data;
      $window._.remove($scope.trips, function(t){
        return t._id === trip._id;
      });
    });
  };
});
