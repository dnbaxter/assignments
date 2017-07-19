var app = angular.module("wishlistApp", ["ngRoute"]);

app.controller("mainCtrl", ["$scope", function ($scope) {

    

}]);






app.config(function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "homeCtrl"
        })
        .when("/computerphonetech", {
            templateUrl: "components/cptech/cptech.html",
            controller: "cpTechCtrl"
        })
        .when("/othertech", {
            templateUrl: "components/othertech/othertech.html",
            controller: "otherTechCtrl"
        })

});