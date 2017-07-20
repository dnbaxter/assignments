var app = angular.module("movieApp");

app.controller("movieSearchCtrl", ["$scope", "netflixDatabase", "movieSearchService", "$window", function ($scope, netflixDatabase, movieSearchService, $window) {




    for (var member in movieSearchService) delete movieSearchService[member];
    
    $scope.getMovieRequest = function (actor, director, title, year) {
        if (director === undefined && title === undefined) {
            var str = actor.firstName;
            str = str.replace(/\s+/g, '+');
            var newActor = {
                'firstName': str
            };
            console.log(newActor);
            movieSearchService.actor = newActor;
            $window.location.href = '/index.html#!/movieinfo';
        } else if (actor === undefined && title === undefined) {
            var str = director.directorName;
            str = str.replace(/\s+/g, '+');
            var newDirector = {
                'directorName': str
            };
            //console.log(newDirector);
            movieSearchService.director = newDirector;
            $window.location.href = '/index.html#!/movieinfo';
        } else if (actor === undefined && director === undefined) {
            var str = title.movieTitle;
            str = str.replace(/\s+/g, '+');
            var newTitle = {
                'movieTitle': str
            };
            //console.log(newDirector);
            movieSearchService.title = title;
            $window.location.href = '/index.html#!/movieinfo';
        } 
//        else if (actor === undefined && director === undefined && title === undefined) {
//            var str = year.movieYear;
//            str = str.replace(/\s+/g, '+');
//            var newYear = {
//                'movieYear': str
//            }
//            //console.log(newDirector);
//            movieSearchService.year = year;
//            $window.location.href = '/index.html#!/movieinfo';
//        }
    }

    
    
    
    
    
    
    
    
    //    console.log($scope.actor);
    //    console.log($scope.director);
    
//    for (var member in movieSearchService) delete movieSearchService[member];

//        $scope.getActorRequest = function (actor) {
//            //console.log(actor)
//            if (actor === undefined) {
//                $window.location.href = '/index.html#!/moviesearch';
//            } else {
//                var str = actor.firstName;
//                str = str.replace(/\s+/g, '+');
//                var newActor = {
//                    'firstName': str
//                }
//                console.log(newActor);
//                movieSearchService.actor = newActor;
//                $window.location.href = '/index.html#!/movieinfo';
//            }
//    
//        }
//    
//        
//        $scope.getDirectorRequest = function(director) {
//            if (director === undefined) {
//                $window.location.href = '/index.html#!/moviesearch';
//            } else {
//                var str = director.directorName;
//                str = str.replace(/\s+/g, '+');
//                var newDirector = {
//                    'directorName': str
//                }
//                console.log(newDirector);
//                movieSearchService.director = newDirector;
//                $window.location.href = '/index.html#!/movieinfo';
//            }
//        }
//
//    console.log(movieSearchService);
//
//
}]);








//actor = movieSearchService.actorInfo(actor);
//console.log(actor);

//        netflixDatabase.actorRequest(actor).then(function(response){
//            $scope.films = response;
//            console.log($scope.films);
//
//            $window.location.href = '/index.html#!/movieinfo';
//        })