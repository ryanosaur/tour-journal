  angular.module('starter.user', [])
  .service('User', function($http){
    var BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
    this.activeUser = {};
    this.registerUser = function(user){
      return $http.post(BASE_URL + '/signup', user);
    }
    this.loginUser = function(user){
      return $http.post(BASE_URL + '/signin', user);
    }
    this.setActiveUser = function(user){
      return this.activeUser = user;
    }
  })
  .service('Artist', function($http){
    var BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
    this.getArtists = function(){
      return $http.get(BASE_URL + '/artists');
    }
    this.getArtist = function(username){
      return $http.get(BASE_URL + '/artists/' + username);
    }
    this.updateArtist = function(username){
      return $http.patch(BASE_URL + '/artists/' + username);
    }
    this.deleteArtist = function(username){
      return $http.delete(BASE_URL + '/artists/' + username);
    }
  })
  .service('Venue', function($http){
    var BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
    this.getVenues = function(){
      return $http.get(BASE_URL + '/venues');
    }
    this.getVenue = function(username){
      return $http.get(BASE_URL + '/venues/' + username);
    }
    this.updateVenue = function(username){
      return $http.patch(BASE_URL + '/venues/' + username);
    }
    this.deleteVenue = function(username){
      return $http.delete(BASE_URL + '/venues/' + username);
    }
  })
  .service('Events', function($http){
    var BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
    this.getEvents = function(){
      return $http.get(BASE_URL + '/events');
    }
    this.getEvent = function(id){
      return $http.get(BASE_URL + '/events/' + id);
    }
    this.createEvent = function(venue){
      return $http.post(BASE_URL + '/events', venue);
    }
    this.updateEvent = function(id){
      return $http.patch(BASE_URL + '/events/' + id);
    }
    this.deleteEvent = function(id){
      return $http.delete(BASE_URL + '/events/' + id);
    }
  })
  ;
