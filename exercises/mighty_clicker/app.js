var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", "blueService", "redService", function($scope, blueService, redService) {
    
    // sets the initial score to show
    $scope.bPoints = blueService.bPoints;
    $scope.rPoints = redService.rPoints;
    
    
    $scope.bluePoints = function() {
        blueService.addBluePoints();
        redService.subtractRedPoints();
        $scope.bPoints = blueService.bPoints;
        $scope.rPoints = redService.rPoints;
        
        //reset
        redService.reset();
        blueService.reset();
    }
    
    $scope.redPoints = function() {
        redService.addRedPoints();
        blueService.subtractBluePoints();
        $scope.rPoints = redService.rPoints;
        $scope.bPoints = blueService.bPoints;
        
        //reset
        blueService.reset();
        redService.reset();
    }
    
    
    
}]);