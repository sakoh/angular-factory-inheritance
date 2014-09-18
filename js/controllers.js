/**
 * Created by sakohartounian on 9/17/14.
 */

SakoApp.controllers = angular.module('SakoApp.controllers',[])
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
    }]);