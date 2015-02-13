'use strict';

/**
 * @ngdoc overview
 * @name shopingCartApp
 * @description
 * # shopingCartApp
 *
 * Main module of the application.
 */
angular
  .module('shopingCartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
