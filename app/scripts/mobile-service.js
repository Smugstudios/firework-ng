'use strict';

angular.module('mobileServices', ['ngResource'])
    .factory('Item', function ($resource) {
        return $resource('https://nevillnet.azure-mobile.net/tables/items/:itemId', {itemId: '@id'}, 
            {
                'update': { method: 'PATCH' }  
            }
        );
    });