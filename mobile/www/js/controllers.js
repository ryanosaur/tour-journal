angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, User, $state) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    $scope.modal.show();
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Perform the login action when the user submits the login form
  $scope.login = function() {
    User.loginUser($scope.user)
    .success(function(user){
      console.log(user);
      User.setActiveUser(user);
      $scope.closeLogin();
      $scope.go('^.featured');
    }).
    catch(function(error){
      console.log(error);
    });
  };

  $scope.register = function(){
    $scope.modal.hide();
    $state.go('^.register');
  }
})

.controller('RegisterCtrl', function($scope, User) {
  $scope.register = function(user){
    User.registerUser(user)
    .success(function(user){
      User.setActiveUser(user);
    })
    .catch(function(error){
      console.log(error);
    });
  }
})
.controller('LoginCtrl', function($scope, User) {

})
;
