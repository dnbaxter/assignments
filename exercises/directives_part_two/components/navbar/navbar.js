var app = angular.module("myApp");

app.directive("navbar", [function() {
    
    return {
        restrict: "E", //restrict to element
        templateUrl: "components/navbar/navbar.html"
    }
    
}]);