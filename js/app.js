/**
 * Created by sakohartounian on 9/17/14.
 */

'use strict';


var SakoApp = angular.module('SakoApp',['ngRoute']);


SakoApp
    .controller('IndexCtrl', ['$scope','AdvancedFactory', function ($scope, AdvancedFactory) {

        $scope.customers = AdvancedFactory.getCustomers();

        $scope.addCustomer = function () {
            return AdvancedFactory.addCustomers($scope.name,$scope.city);
        };

        $scope.deleteCustomer = function () {
            return AdvancedFactory.deleteCustomer();
        }

    }])
    .controller('HelloCtrl',['$scope', function ($scope) {
        $scope.message = 'Hello World';

        $scope.changeMessage = function () {
            $scope.message = $scope.newMessage;
        }
    }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/index.html',
                controller: 'IndexCtrl'
            })
            .when('/hello',{
                templateUrl:'partials/hello.html',
                controller:'HelloCtrl'
            });
    }])
    .factory('SimpleFactory',[function () {

        var customers = [
            {name:'John Smith', city:'Plano, Texas'},
            {name:'John Doe',city:'Baltimore, Maryland'},
            {name:'Jane Doe',city:'Pasadena, California'}
        ];

        return {
            getCustomers: function () {
                return customers;
            }
        };

    }])
    .factory('AdvancedFactory', ['SimpleFactory', function (SimpleFactory) {

        //advancedFactory inheriting features from simpleFactory
        return angular.extend({

            addCustomers: function (name, city) {
                var customer = {name: name, city: city};
                this.getCustomers().push(customer);
            },

            deleteCustomer: function () {
                this.getCustomers().pop();
            }

        }, SimpleFactory);

    }]);