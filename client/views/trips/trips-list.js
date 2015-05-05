'use strict';

angular.module('roadtrip')
.controller('TripsListCtrl', function($scope, $state, Trip){
  Trip.find()
  .then(function(response){
    $scope.trips = response.data.trips;
  });
});
