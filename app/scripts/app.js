'use strict';

angular.module('fireworkNgApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'azure-mobile-service.module',
    'ui.bootstrap'])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainController'
            })
            .when('/timeline', {
                templateUrl: 'views/timeline.html',
                controller: 'MainController'
            })
            .when('/add', {
                templateUrl: 'views/add.html',
                controller: 'MainController'
            })
            .when('/edit/:itemId', {
                templateUrl: 'views/edit.html',
                controller: 'EditController'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })
            .otherwise({
                redirectTo: '/'
            });
    },
    function ($httpProvider) { // coniguring the httpProvider
        $httpProvider.defaults.headers.common['X-ZUMO-APPLICATION'] = 'na'; // add the application key
        $httpProvider.defaults.headers.common['Content-Type'] = 'Application/json';
    }
);
