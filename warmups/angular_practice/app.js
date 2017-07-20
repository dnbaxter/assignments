var app = angular.module('MyApp', []);

app.controller('MainController', function($scope) {
//    $scope.people = [
//        {
//            firstName: "Johnny",
//            lastName: "Mathis"
//        },{
//            firstName: "Bugs",
//            lastName: "Rabbit"
//        },{
//            firstName: "Helga",
//            lastName: "Swenderson"
//        }
//    ]
//    
//    $scope.getFullName = function() {
//        return $scope.person.firstName + ' ' + $scope.person.lastName;
//    };
    
    $scope.getTitle = function(str) {
        return $scope.newTitle = str;
    }
    
    
});

// with angular, declare the functions as a $scope


app.controller('MainController', ["$scope", function($scope) {
    
}]);
// this is to minify 