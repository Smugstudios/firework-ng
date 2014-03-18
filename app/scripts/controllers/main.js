'use strict';

angular.module('fireworkNgApp')
    .controller('MainCtrl', function ($scope) {

        $scope.fireworkEvents = [
            {message: 'jeremy ate 2 lunches'},
            {message: 'jeremy ate 3 breakfasts'},
            {message: 'jeremy ran 3 miles'},
        ];

        $scope.cheese = "Cheddar";

    });

