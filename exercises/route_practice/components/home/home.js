var app = angular.module("routingApp");

app.controller("HomeCtrl", ["$scope", function($scope) {
    
    $scope.people = ["Dustin", "Tetyana", "Mike", "Jordan", "Seth"];
    
}]);