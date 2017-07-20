var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", "httpService", function ($scope, httpService) {

    $scope.pokemon;
    $scope.getPokemon = function() {
        httpService.getRequest('http://pokeapi.co/api/v1/pokemon/7').then(function(serviceResponse) {
            $scope.pokemon = serviceResponse;
        });
    }

//    $scope.submit = function (user) {
//        $http.post('/someurl', user).then(function (user) {
//                //continue with normal operations
//            },
//            function (response) {
//                //in case there is an error, do this other stuff
//            });
//    };


    //    $scope.submit = function(user) {
    //        console.log(user);
    //        //    $http.post('some/url', user).then(function(response) {
    //        //do stuff with response.data
    //   
    //    }
}]);

app.service("httpService", ["$http", function($http) {
    this.getRequest = function(url) {
        return $http.get(url).then(
        function(serverResponse) {
            return serverResponse.data;
        },
        function(serverResponse) {
            return serverResponse;
        })
    };
    
}]);




//    GET
//    $scope.http;
//    $http.get('http://pokeapi.co/api/v1/pokemon/1').then(function (response) {
//        console.log(response.data);
//        
//        $scope.http = response.data;
//    });


//    POST    
//    $http.post('http://pokeapi.co/api/v1/pokemon/1', dataToBePosted).then(function(response) {
//        //do stuff with response.data
//    });