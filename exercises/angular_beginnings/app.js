var app = angular.module('MyApp', []);

app.controller('MainController', ["$scope", function($scope) {
    
    $scope.getInput = function(str) {
        return $scope.newInput = str;
    };
    
    
}]);