'use strict';

angular.module('fireworkNgApp')
    .controller('MainController', function ($scope, Azureservice) {

        $scope.newItem = {};
        $scope.fireworkItems = [];

        Azureservice.query('items', {})
            .then(function (items) {
                $scope.fireworkItems = items;
            }, function (err) {
                console.error('Error: ' + err);
            });

        $scope.create = function () {
            Azureservice.insert('items', $scope.newItem)
                .then(function () {
                    console.log('Insert successful');
                }, function (err) {
                    console.error('Error: ' + err);
                })
        };

        $scope.delete = function (item) {
            Azureservice.del('items', item)
                .then(function () {
                    console.log('Delete successful');
                    Azureservice.query('items', {})
                        .then(function (items) {
                            $scope.fireworkItems = items;
                        }, function (err) {
                            console.error('Error: ' + err);
                        });
                }, function (err) {
                    console.error('Error: ' + err);
                })
        };

        $scope.update = function (item) {
            item.$update();
        };
    })
;