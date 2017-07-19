var app = angular.module("starWarsApp");

app.service("starWarsService", ["$http", function($http) {
    
    var starwarsUrl = "http://swapi.co/api/films/1";
    
    return $http.get(starwarsUrl)
    .then(function(response) {
        //console.log(response);
        return response.data;
    }, function(reponse) {
        return reponse;
    })
    
}]);