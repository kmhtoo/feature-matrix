'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);


var handleClientLoad = function() {
  gapi.client.setApiKey('AIzaSyCJiBR1-tmt0Pp2yhBo8P7g6FqY2q_S7F8');
  gapi.client.load('storage', 'v1beta2', function() {
    console.log('gapi ready')
  });
};
