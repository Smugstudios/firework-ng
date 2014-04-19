'use strict';

angular.module('fireworkNgApp')
    .controller('MainController', function ($scope, Azureservice) {

        $scope.newItem = {};
        $scope.fireworkItems = [];
        $scope.loading = true;
        $scope.showStatus = false;
        $scope.statusMessage = '';

        refreshItems();

        $scope.create = function () {
            Azureservice.insert('items', $scope.newItem)
                .then(function () {
                    console.log('Insert successful');
                    refreshItems();
                    $scope.statusMessage = "Item added successfully";
                    $scope.showStatus = true;
                }, function (err) {
                    console.error('Error: ' + err);
                    $scope.statusMessage = "Item failed to add";
                    $scope.showStatus = true;
                })
        };

        $scope.delete = function (item) {
            Azureservice.del('items', item)
                .then(function () {
                    console.log('Delete successful');
                    refreshItems();
                    $scope.statusMessage = "Item deleted successfully";
                    $scope.showStatus = true;               
                }, function (err) {
                    console.error('Error: ' + err);
                })
        };

        function refreshItems() {
            $scope.loading = true;
            Azureservice.query('items', {})
                .then(function (items) {
                    $scope.fireworkItems = items;
                    $scope.loading = false;
                }, function (err) {
                    console.error('Error: ' + err);
                    $scope.loading = false;
                });
        };

        $scope.isLoggedIn = Azureservice.isLoggedIn();

    });