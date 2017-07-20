var app = angular.module("trailApp", ["ngRoute"]);

app.controller("mainCtrl", ["$scope", "$http", function ($scope, $http) {

    $(function() {
        $('body').removeClass('fade-out');
    });

}]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/trailsearch", {
            templateUrl: "components/trailsearch/trailsearch.html",
            controller: "trailSearchCtrl"
        })
        .when("/trailinfo", {
            templateUrl: "components/trailinfo/trailinfo.html",
            controller: "trailInfoCtrl"
        })
        .otherwise({
            redirectTo: "/trailsearch"
        })
}]);