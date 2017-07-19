var app = angular.module("bountyApp");

app.directive("bountyReq", function () {
    return {
        restrict: "AE",
        templateUrl: "components/inputs/bountyInput.html"
    }
});

app.controller("bountyCtrl", ["$scope", "$http", "bountyService", function ($scope, $http, bountyService) {

    

}]);