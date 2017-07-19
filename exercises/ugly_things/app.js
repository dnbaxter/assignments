var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", function($scope) {
    
    $scope.uglyPics = [];
    
    $scope.submit = function(ugly) {
        console.log(ugly.title);
        $scope.uglyPics.push(ugly);
        $scope.ugly = {};
    }
    
}]);