'use strict';

angular.module('mobileServices', ['ngResource']). // new service mobileServices depending on ngResource
    factory('Item', function ($resource) { // declaring a MyTable resource
        return $resource('https://nevillnet.azure-mobile.net/tables/items/:itemId', {itemId: '@id'}, // binding to the table url
            {
                'update': { method: 'PATCH' } // adding an update function
            }
        );
    });