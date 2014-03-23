'use strict';

angular.module('fireworkNgApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'mobileServices'
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
    },
    function ($httpProvider) { // coniguring the httpProvider
        $httpProvider.defaults.headers.common['X-ZUMO-APPLICATION'] = 'NKlaZACMlXLkdoXugaPGoliFvnrpoW34'; // add the application key
        $httpProvider.defaults.headers.common['Content-Type'] = 'Application/json';
    }
);



