'use strict';

angular.module('fireworkNgApp')
    .controller('MainCtrl', function ($scope) {

        $scope.fireworkEvents = [
            {message: '@jeremy ate 2lunches 01/jan/2012', actor: 'jeremy', action: 'ate', amount: 2, units: 'lunches', date: '01/jan/2012'},
            {message: '@jeremy ate 3breakfasts 01/jan/2012', actor: 'jeremy', action: 'ate', amount: 2, units: 'lunches', date: '01/jan/2012'},
            {message: '@fred ran 3miles 01/jan/2012', actor: 'fredd', action: 'ran', amount: 3, units: 'miles', date: '01/jan/2012'},
            {message: '@fred ran 3miles 01/jan/2012', actor: 'fredd', action: 'ran', amount: 3, units: 'miles', date: '01/jan/2012'},
            {message: '@fred ran 3miles 01/jan/2012', actor: 'fredd', action: 'ran', amount: 3, units: 'miles', date: '01/jan/2012'},
            {message: '@fred ran 3miles 01/jan/2012', actor: 'fredd', action: 'ran', amount: 3, units: 'miles', date: '01/jan/2012'}
        ];

        $scope.delete = function (idx) {
            $scope.fireworkEvents.splice(idx, 1);
        };

    });

