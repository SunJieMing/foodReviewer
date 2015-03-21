'use strict';
angular
.module('foodReviewerApp', [
  'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  
  $httpProvider.defaults.headers.common = { 
    'Content-Type' : 'application/json',
    'X-Parse-REST-API-Key' : 'UdcXoHvXjw9KnXh3zQEfaRUmUPlfxxKzbao5fpnp',
    'X-Parse-Application-Id' : 'YVcmjGJWG8DjpOj4MLUUFINoKVmysUe0pqGrNJBn'
  };

  $urlRouterProvider
  .otherwise('/');

}]);