var app = angular.module("movieApp");

app.controller("movieAboutCtrl", ["$scope", "netflixDatabase", "movieSearchService", "$routeParams", function($scope, netflixDatabase, movieSearchService, $routeParams) {
    
    $scope.artist = {};
    netflixDatabase.actorRequest(movieSearchService.actor)
            .then(function (response) {
            var films = response;
            //console.log(films);
        
        for (var i = 0; i < films.length; i++) {
        if (films[i].show_id === $routeParams.id) {
            
            $scope.artist = films[i];
        }
            //console.log($scope.artist);
            console.log(films[i]);
            //console.log($routeParams);
            //console.log($scope.artist);
    }
        });
    
    //console.log(netflixDatabase.actorRequest(movieSearchService.actor));
    //console.log($routeParams);
    
    
}]);