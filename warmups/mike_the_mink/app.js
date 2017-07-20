var app = angular.module("minkApp", ["ngRoute"]);



app.directive("mikeTheMink", function() {
    
    return {
        template: "<img src='https://coursework.vschool.io/content/images/2015/06/download.jpg' alt=''>"
    }
    
});

app.config(function($routeProvider) {
    
    $routeProvider
    .when("/home", {
        templateUrl: "components/home/home.html",
        controller: "mainCtrl"
    })
    .when("/aboutme", {
        templateUrl: "components/aboutMe/aboutMe.html",
        controller: "aboutMeCtrl"
    })
    .when("/aboutyou", {
        templateUrl: "components/aboutYou/aboutYou.html",
        controller: "aboutYouCtrl"
    })
    
});