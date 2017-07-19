var app = angular.module("wishlistApp");

app.directive("myNav", function() {
    
    return {
        restrict: "AE",
        templateUrl: "components/navbar/navbar.html"
    }
    
});