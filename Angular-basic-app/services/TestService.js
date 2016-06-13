/// <reference path="D:\techLab\Web-upSkilling\ng-library\angular.js"/>

var aurionPro = angular.module('aurionPro', []);

//aurionPro.service('utilSvc', function () {
//  console.log("Inside util services");
//    this.appName = "AurionPro Customer Mangment Services";
//  this.version = "v1.0";
//    this.getFormattedDate = function () {
//      var date = new Date();
//    return date.toDateString();
//    }
//});

aurionPro.factory('utilSvc', function () {
    console.log("Inside util factory");
    var getName = function () {
        return angular.uppercase("AurionPro Customer Mangment Services");
    }
    var getDate = function () {
        var date = new Date();
        return date.toDateString();
    }
    return {
        appName: getName(),
        version: "v1.0",
        getFormattedDate: getDate
    }

});


aurionPro.controller('MainCtrl', ['$scope', 'utilSvc', function ($scope, utilSvc) {
    $scope.name = utilSvc.appName;
    $scope.date = utilSvc.getFormattedDate();
    console.log(utilSvc);
}]);

aurionPro.controller('SubCtrl', ['$scope', 'utilSvc', 'customerSvc', function ($scope, utilSvc, customerSvc) {
    $scope.version = utilSvc.version;
    $scope.customer = customerSvc.createCustomer(2);
    console.log(utilSvc);
}]);


var GoldCustomer = function (name, payment) {
    this.name = name;
    this.payment = payment;
    this.discount = function () {
        return payment * 50;
    }
}

var SilverCustomer = function (name, payment) {
    this.name = name;
    this.payment = payment;
    this.discount = function () {
        return payment * 20;
    }
}

aurionPro.factory('customerSvc', function () {
    console.log("Inside Customer factory");
    var getCustomer = function (type) {
        if (type == 1)
            return new GoldCustomer("ABC", 5000);
        else
            return new SilverCustomer("XYZ", 2000)
    }

    return {
        createCustomer: getCustomer
    }

});


var techlabs = angular.module('techlabs', ['aurionPro']);