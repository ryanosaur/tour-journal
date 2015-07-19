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

.controller('RegisterCtrl', function($scope, $state, User) {
  $scope.register = function(user){
    User.registerUser(user)
    .success(function(user){
      User.setActiveUser(user);
      console.log(User.activeUser);
      $state.go('^.featured');
    })
    .catch(function(error){
      console.log(error);
    });
  }
})
.controller('ProfileCtrl', function($scope, $ionicModal, User, Venue, $state) {
  console.log('profilectrl');
  $scope.booking = function() {
    $ionicModal.fromTemplateUrl('templates/booking.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  }

  $scope.bookingUser = function() {
      $scope.modal.hide();
  }

  $scope.$on('$ionicView.enter', function(e) {
    Venue.getVenue($state.params.id)
    .success(function(user){
      $scope.user = user;
      console.log($scope.user);
    })
    .catch(function(error){
      console.log(error);
    });
  });
})
.controller('VenuesCtrl', function($scope, User, Venue, $state) {
  $scope.$on('$ionicView.enter', function(e) {
    Venue.getVenues()
    .success(function(venues){
      $scope.venues = venues;
    })
    .catch(function(error){
      console.log(error);
    });
  });
  $scope.getVenuePage = function(index){
    $state.go('app.profile', {id: $scope.venues[index].id });
  }
})
.controller('ArtistsCtrl', function($scope, User, Artist, $state) {
  $scope.$on('$ionicView.enter', function(e) {
    Artist.getArtists()
    .success(function(artists){
      $scope.artists = artists;
    })
    .catch(function(error){
      console.log(error);
    });
    $scope.getArtistPage = function(index){
      $state.go('app.profile', {id: $scope.artists[index].id });
    }
  });


})
.controller('VenueCtrl', function($scope, $state, User, Venue) {
  $scope.$on('$ionicView.enter', function(e) {
    Venue.getVenue($state.params.username)
    .success(function(venue){
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
      console.log(artists);
      $scope.artist = artist;
    })
    .catch(function(error){
      console.log(error);
    });
  });
})
.controller('SearchCtrl', function($scope, $state, User, Search) {
  $scope.getResults = function(search){
    Search.getResults(search)
    .success(function(results){
      $scope.results = results;
    })
    .catch(function(error){
      console.log(error);
    });
  }
  $scope.getArtistPage = function(index){
    $state.go('app.profile', {id: $scope.results[index].id });
  }
})
.controller('FeaturedCtrl', function($scope, $state, User, Artist, Venue) {
  $scope.$on('$ionicView.enter', function(e) {
      Artist.getArtists()
      .success(function(artists){
        $scope.artists = artists.slice(0,3);
      })
      .catch(function(error){
        console.log(error);
      });
      Venue.getVenues()
      .success(function(venues){
        $scope.venues = venues.slice(0,3);
      })
      .catch(function(error){
        console.log(error);
      });
    });
  $scope.getArtistPage = function(index){
    $state.go('app.profile', {id: $scope.artists[index].id });
    // console.log(index);
  }
  $scope.getVenuePage = function(index){
    $state.go('app.profile', {id: $scope.venues[index].id });
  }
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
