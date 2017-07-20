var app = angular.module("movieApp");

app.service("netflixDatabase", ["$http", function ($http) {

    var netflixUrl = "https://community-netflix-roulette.p.mashape.com/api.php?";
    var mashapeKey = "L6QvSOKww2mshG1Rib49Ytq83xvbp1ipMM0jsnvW0x5EfQZdh0";

    this.actorRequest = function (actor) {
            return $http.get(netflixUrl +
                    `actor=${actor.firstName}`, {
                        headers: {
                            "X-Mashape-Key": mashapeKey
                        }
                    })
                .then(function (response) {
                    return response.data;
                }, function (reponse) {
                    return reponse;
                })
        };


    this.directorRequest = function (director) {
        return $http.get(netflixUrl +
                `director=${director.directorName}`, {
                    headers: {
                        "X-Mashape-Key": mashapeKey
                    }
                })
            .then(function (response) {
                return response.data;
            }, function (response) {
                return response;
            })
    };
    
    this.titleRequest = function (title) {
        return $http.get(netflixUrl +
                `title=${title.movieTitle}`, {
                    headers: {
                        "X-Mashape-Key": mashapeKey
                    }
                })
            .then(function (response) {
                return response.data;
            }, function (response) {
                return response;
            })
    };
    
//    this.yearRequest = function (year) {
//        return $http.get(netflixUrl +
//                `year=${year.movieYear}`, {
//                    headers: {
//                        "X-Mashape-Key": mashapeKey
//                    }
//                })
//            .then(function (response) {
//                return response.data;
//            }, function (response) {
//                return response;
//            })
//    }




}]);