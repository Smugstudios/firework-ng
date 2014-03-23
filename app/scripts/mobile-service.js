'use strict';

angular.module('mobileServices', ['ngResource']). // new service mobileServices depending on ngResource
    factory('Event', function ($resource) { // declaring a MyTable resource
        return $resource('https://nevillnet.azure-mobile.net/tables/events/:eventId', {eventId: '@id'}, // binding to the table url
            {
                'update': { method: 'PATCH' } // adding an update function
            }
        );
    });