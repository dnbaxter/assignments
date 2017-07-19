var app = angular.module('MyApp', []);



app.controller('MainController', ['$scope', function ($scope) {
    
    $scope.badges = [];

    $scope.submit = function (user) {
        $scope.badges.push(user);
        $scope.user = {};
    }


}]);