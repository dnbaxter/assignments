var app = angular.module("myApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    
    $routeProvider
    .when("/home", {
        templateUrl: "components/home/home.html",
        controller: "HomeCtrl"
    })
    .when("/about", {
        templateUrl: "components/about/about.html",
        controller: "AboutCtrl"
    })
    .when("/whyilove", {
        templateUrl: "components/whyilove/whyilove.html",
        controller: "WhyILoveCtrl"
    })
    .otherwise({
        redirectTo: "/home"
    })
    
}]);


app.directive("mikeTheMink", function() {
    
    return {
        template: "<img src='https://coursework.vschool.io/content/images/2015/06/download.jpg' alt=''>"
    }
    
});