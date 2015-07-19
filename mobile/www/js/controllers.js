angular.module('starter.controllers', ['firebase'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $firebase, $firebaseAuth) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  var ref = new Firebase("https://tourjournal.firebaseio.com");
  ref.unauth();


  // var firebaseRef = new Firebase("https://tourjournal.firebaseio.com/");
  // $scope.auth = $firebaseSimpleLogin(firebaseRef);

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    ref.onAuth(function(authData) {
      if (authData) {
        $scope.closeLogin();
        console.log("Authenticated with uid:", authData);
      } else {
        $scope.modal.show();
        console.log("Client unauthenticated.")
      }
    });
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.loginWithTwitter = function() {
    console.log('Doing login', $scope.loginData);
    ref.authWithOAuthRedirect("twitter", function(error) {
      console.log(error);
    });
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
