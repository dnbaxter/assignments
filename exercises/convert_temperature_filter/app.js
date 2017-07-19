var app = angular.module("tempApp", []);

app.controller("mainCtrl", ["$scope", function($scope) {
    
    $scope.temps = [10, 15, 20, 25, 30];
    
    
    
}]);

app.filter("temperature", function() {
    
    return function(temp) {
        tempF = temp;
        tempF = Math.round(tempF * 9.0 / 5.0 + 32);
        return tempF + "°F or " + temp + "°C";
    }
    
});