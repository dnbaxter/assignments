var app = angular.module("starWarsApp", []);

app.controller("mainCtrl", ["$scope", "starWarsService", function($scope, starWarsService) {
    
    $('#audio').bind('timeupdate', function () {
    if (this.currentTime >= 70) this.pause();
});
    
    starWarsService
    .then(function(response) {
        $scope.openingCredits = response.opening_crawl;
        //console.log($scope.openingCredits);
    })
    
}]);


//hitlistService
//            .then(function (response) {
//            $scope.targets = response;
//            console.log($scope.targets);
//        });