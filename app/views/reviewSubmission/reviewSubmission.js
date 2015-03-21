'use strict';
angular.module('foodReviewerApp')
.config(function($stateProvider) {
  $stateProvider
  .state('reviewSubmission', {
    url: '/submitreview',
    templateUrl: '/views/reviewSubmission/reviewSubmission.html',
    controller: 'ReviewSubmission'
  });
});