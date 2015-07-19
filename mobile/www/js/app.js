// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'firebase', 'starter.controllers', 'starter.user'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.featured', {
    url: '/featured',
    views: {
      'menuContent': {
        templateUrl: 'templates/featured.html'
      }
    }
  })

  .state('app.register', {
    url: '/register',
    views: {
      'menuContent': {
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl'
      }
    }
  })

  .state('app.venues', {
    url: '/venues',
    views: {
      'menuContent': {
        templateUrl: 'templates/venues.html'
      }
    }
  })

  .state('app.artists', {
    url: '/artists',
    views: {
      'menuContent': {
        templateUrl: 'templates/artists.html'
      }
    }
  })

  .state('app.messages', {
    url: '/messages',
    views: {
      'menuContent': {
        templateUrl: 'templates/messages.html'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.profile', {
    url: '/profile/:profileId',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/featured');
});
