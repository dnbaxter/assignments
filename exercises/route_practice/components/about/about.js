var app = angular.module("routingApp");

app.controller("AboutCtrl", ["$scope", function($scope) {
    
    $scope.people = ["Dustin", "Tetyana", "Mike", "Jordan", "Seth"];
    
}]);