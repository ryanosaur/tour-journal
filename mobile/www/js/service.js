  angular.module('starter.user', [])
  .service('User', function($http){
    this.registerUser = function(user){
      return $http.post('http://localhost:3000/signup', user);
    }
    this.loginUser = function(user){
      return $http.post('http://localhost:3000/auth/signin', user);
    }
  });
