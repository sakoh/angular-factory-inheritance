/**
 * Created by sakohartounian on 9/17/14.
 */

'use strict';


var SakoApp = angular.module('SakoApp',['ngRoute','SakoApp.controllers','SakoApp.factories']);

SakoApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/index.html',
            controller: 'IndexCtrl'
        })
        .when('/hello',{
            templateUrl:'partials/hello.html',
            controller:'HelloCtrl'
        });
}]);