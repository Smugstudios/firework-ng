'use strict';

angular.module('fireworkNgApp')
    .controller('LoginController', function ($scope, Azureservice) {

        $scope.authenticate = function (socialMediaService) {
            Azureservice.login(socialMediaService)
                .then(function () {
                    console.log('Logged In');
                    $scope.isLoggedIn = Azureservice.isLoggedIn();
                }, function (err) {
                    console.error('Azure Login Error: ' + err);
                })
        };

        $scope.logout = function () {
            Azureservice.logout();
            $scope.isLoggedIn = false;
            console.log('Logging Out');
        };

        $scope.isLoggedIn = Azureservice.isLoggedIn();
    });
