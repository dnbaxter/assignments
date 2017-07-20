var app = angular.module("movieApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    
    $routeProvider
    .when("/moviesearch", {
        templateUrl: "components/movieSearch/movieSearch.html",
        controller: "movieSearchCtrl"
    })
    .when("/movieinfo", {
        templateUrl: "components/movieInfo/movieInfo.html",
        controller: "movieInfoCtrl"
    })
    .when("/about/:id", {
        templateUrl: "components/movieAbout/movieAbout.html",
        controller: "movieAboutCtrl"
    })
    .when("/home", {
        templateUrl: "components/home/home.html",
        controller: "homeCtrl"
    })
   // .otherwise({
   //     redirectTo: "/home"
   // })
    
}]);