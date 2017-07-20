var app = angular.module("movieApp");

app.controller("movieInfoCtrl", ["$scope", "netflixDatabase", "movieSearchService", function ($scope, netflixDatabase, movieSearchService) {


    console.log("actor = " + movieSearchService.actor);
    console.log("director = " + movieSearchService.director);
    console.log("title = " + movieSearchService.title);
    
    console.log(movieSearchService);
    
    if (movieSearchService.director === undefined && movieSearchService.title === undefined) {
        netflixDatabase.actorRequest(movieSearchService.actor)
            .then(function (response) {
            $scope.films = response;
            console.log($scope.films);
        });
    } else if (movieSearchService.actor === undefined && movieSearchService.title === undefined) {
        netflixDatabase.directorRequest(movieSearchService.director)
            .then(function (response) {
            $scope.films = response;
            console.log($scope.films);
        });
    } else if (movieSearchService.actor === undefined && movieSearchService.director === undefined) {
        netflixDatabase.titleRequest(movieSearchService.title)
            .then(function(response) {
            $scope.movieTitles = response;
            console.log($scope.movieTitles);
        })
    } 
//    else if (movieSearchService.actor === undefined && movieSearchService.director === undefined && movieSearchService.title === undefined) {
//        netflixDatabase.yearRequest(movieSearchService.year)
//            .then(function(response) {
//            $scope.films = response;
//            console.log($scope.films);
//        })
//    }
    

    
    



}]);