var app = angular.module("trailApp");

app.controller("trailInfoCtrl", ["$scope", "trailSearchService", function ($scope, trailSearchService) {

    console.log("Trail name: " + trailSearchService.name);

}]);