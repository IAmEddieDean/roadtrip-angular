'use strict';

angular.module('roadtrip')
.factory('Trip', function($rootScope, $http, nodeUrl){

  function Trip(obj){
    this.name = obj.name;
    this.depart = obj.depart;
    this.dest = obj.dest;
  }
  Trip.prototype.save = function(){
    return $http.post(nodeUrl + '/trips', this);
  };
  // User.show = function(){
  //   return $http.get(nodeUrl + '/users');
  // };
  // User.oauth = function(provider){
  //   $rootScope.afAuth.$authWithOAuthPopup(provider);
  // };
  // User.register = function(user){
  //   return $rootScope.afAuth.$createUser(user);
  // };
  //
  // User.login = function(user){
  //   return $rootScope.afAuth.$authWithPassword(user);
  // };
  //
  // User.logout = function(){
  //   return $rootScope.afAuth.$unauth();
  // };

  return Trip;
});
