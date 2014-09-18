/**
 * Created by sakohartounian on 9/17/14.
 */
SakoApp.factories = angular('SakoApp.factories',[])
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