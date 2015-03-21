'use strict';

/**
 * @ngdoc function
 * @name foodReviewerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foodReviewerApp
 */
angular.module('foodReviewerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  
.config(function($stateProvider) {
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: '/views/main/main.html',
    controller: 'MainCtrl'
  });
});
