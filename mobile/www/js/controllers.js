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
  $scope.login = function(user) {
    User.loginUser(user)
    .success(function(user){
      console.log(user);
      User.setActiveUser(user);
      $scope.closeLogin();
      $state.go('^.featured');
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
.controller('VenuesCtrl', function($scope, User, Venue) {
  $scope.$on('$ionicView.enter', function(e) {
    Venue.getVenues()
    .success(function(venues){
      console.log(venues);
      $scope.venues = venues;
    })
    .catch(function(error){
      console.log(error);
    });
  });
})
.controller('ArtistsCtrl', function($scope, User, Artist) {
  $scope.$on('$ionicView.enter', function(e) {
    Artist.getArtists()
    .success(function(artists){
      console.log(artists);
      $scope.artists = artists;
    })
    .catch(function(error){
      console.log(error);
    });
  });
})
.controller('VenueCtrl', function($scope, $state, User, Venue) {
  $scope.$on('$ionicView.enter', function(e) {
    Venue.getVenue($state.params.username)
    .success(function(venue){
      console.log(venue);
      $scope.venue = venue;
    })
    .catch(function(error){
      console.log(error);
    });
  });
})
.controller('ArtistCtrl', function($scope, $state, User, Artist) {
  $scope.$on('$ionicView.enter', function(e) {
    Artist.getArtist($state.params.username)
    .success(function(artist){
      console.log(artist);
      $scope.artist = artist;
    })
    .catch(function(error){
      console.log(error);
    });
  });
})
.controller('FeaturedCtrl', function($scope, $state, User, Artist, Events) {
  $scope.$on('$ionicView.enter', function(e) {
    // Artist.getArtist($state.params.username)
    // .success(function(artist){
    //   console.log(artist);
    //   $scope.artist = artist;
    // })
    // .catch(function(error){
    //   console.log(error);
    // });
  });
})
.controller('BookingCtrl', function($scope, $state, User, Artist, Events) {
  $scope.$on('$ionicView.enter', function(e) {
    // Artist.getArtist($state.params.username)
    // .success(function(artist){
    //   console.log(artist);
    //   $scope.artist = artist;
    // })
    // .catch(function(error){
    //   console.log(error);
    // });
  });
})
;
