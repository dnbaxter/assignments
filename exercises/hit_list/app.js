var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", "hitlistService", function($scope, hitlistService){
    
//    var hitlist = "http://api.vschool.io:6543/hitlist.json";
//    
//    //console.log(hitlist);
//    
//    $http.get(hitlist)
//    .then(function(response, error){
//        $scope.targets = (response.data);
//        console.log($scope.targets);
//    })
//    
//    function error(response) {
//        console.log(response.status);
//    }
    
    //console.log(hitlistService);
    
    hitlistService
            .then(function (response) {
            $scope.targets = response;
            console.log($scope.targets);
        });

    
}]);