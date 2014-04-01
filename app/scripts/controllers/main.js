'use strict';

angular.module('fireworkNgApp')
    .controller('MainController', function ($scope, Azureservice) {

        $scope.newItem = {};
        $scope.fireworkItems = [];
        refreshItems();

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
                    refreshItems();
                }, function (err) {
                    console.error('Error: ' + err);
                })
        };

        function refreshItems() {
            Azureservice.query('items', {})
                .then(function (items) {
                    $scope.fireworkItems = items;
                }, function (err) {
                    console.error('Error: ' + err);
                });
        };
    });