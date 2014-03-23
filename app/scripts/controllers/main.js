'use strict';

angular.module('fireworkNgApp')
    .controller('MainCtrl', function ($scope, Event) {

        $scope.newEvent = new Event();
        $scope.fireworkEvents = Event.query();

        $scope.create = function () {
            $scope.newEvent.$save(function () {
                $scope.fireworkEvents = Event.query();
                $scope.newEvent = new Event();
            });
        }

        $scope.delete = function (event) {
            event.$delete(function () {
                $scope.fireworkEvents = Event.query();
            });
        };

        $scope.update = function (event) {
            event.$update();
        }
    });