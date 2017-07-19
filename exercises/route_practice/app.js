var app = angular.module("routingApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
    
    $routeProvider
    .when("/home", {
        templateUrl: "components/home/home.html",
        controller: "HomeCtrl"
    })
    .when("/about", {
        templateUrl: "components/about/about.html",
        controller: "AboutCtrl"
    });
}]);

//Learn the differences of service, factory, provider