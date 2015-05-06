'use strict';

angular.module('roadtrip')
.factory('Trip', function($rootScope, $http, nodeUrl){

  function Trip(obj){
    this._id = obj._id;
    this.name = obj.name;
    this.depart = obj.depart;
    // this.dest = obj.dest;
  }
  Trip.prototype.save = function(){
    return $http.post(nodeUrl + '/trips', this);
  };
  Trip.find = function(){
    return $http.get(nodeUrl + '/trips');
  };
  Trip.show = function(tripId){
    return $http.get(nodeUrl + '/trips/' + tripId);
  };
  Trip.prototype.addStop = function(stop){
    return $http.post(nodeUrl + '/trips/' + this._id + '/stops', stop);
  };
  Trip.destroy = function(trip){
    return $http.delete(nodeUrl + '/trips/' + trip._id);
  };
  Trip.destroyStop = function(stop, trip){
    return $http.delete(nodeUrl + '/trips/' + trip._id + '/stops/' + stop._id);
  };
  return Trip;
});
