'use strict';

angular.module('fireworkNgApp')
    .controller('LoginController', function ($scope, Azureservice) {

        $scope.authenticate = function (socialMediaService) {

            Azureservice.login(socialMediaService)
                .then(function () {
                    console.log('Login successful');
                }, function (err) {
                    console.error('Azure Error: ' + err);
                })
        };

        $scope.logout = function () {
            Azureservice.logout();
        }

        $scope.isLoggedIn = Azureservice.isLoggedIn();
        
    });
