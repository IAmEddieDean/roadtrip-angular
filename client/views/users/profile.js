'use strict';

angular.module('roadtrip')
.controller('ProfileCtrl', function($scope, $window, User){
  User.show()
    .then(function(response){
      $scope.user = response.data;
    });
    
  $scope.update = function(obj){
    var user = new User(obj);
    user.save()
    .then(function(){
      $window.swal({title: 'Profile Updated', text: 'Thank you for updating your profile!', type: 'success'});
      // $scope.user = {};
    })
    .catch(function(){
      $window.swal({title: 'Registration Error', text: 'There was a problem with your registration. Please try again.', type: 'error'});
    });
  };
});
