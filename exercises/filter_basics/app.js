var app = angular.module("angularFilters", []);

app.controller("mainCtrl", ["$scope", function($scope){
    
    $scope.test = "this is a lowercase sentence";
    $scope.test2 = 50.458;
    $scope.date = "2017-05-26"
    
    $scope.person = {
        name: "Jonny",
        email: "jonny@bravo.com",
        password: "suhdude"
    }
    
    $scope.list = ["name", "house", "cat", "mouse", "blouse"];
    
}]);


app.filter("upper", function() {
    
    return function(input) {
        return input.toUpperCase();
    }
    
});