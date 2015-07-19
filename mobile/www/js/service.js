  angular.module('starter.user', [])
  .service('User', function($http){
    this.loginUser = function(user){
      return $http.post('http://localhost:3000/auth/signin', user);
    }
  });
