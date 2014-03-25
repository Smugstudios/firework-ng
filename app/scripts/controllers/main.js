'use strict';

angular.module('fireworkNgApp')
    .controller('MainCtrl', function ($scope, Item) {

        $scope.newItem = new Item();
        $scope.fireworkItems = Item.query();

        $scope.create = function () {
            $scope.newItem.$save(function () {
                $scope.fireworkItems = Item.query();
                $scope.newItem = new Item();
            });
        }

        $scope.delete = function (item) {
            item.$delete(function () {
                $scope.fireworkItems = Item.query();
            });
        };

        $scope.update = function (item) {
            item.$update();
        }
    });