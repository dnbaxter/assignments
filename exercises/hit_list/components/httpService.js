var app = angular.module("myApp");

app.service("hitlistService", ["$http", function($http) {
    
    var hitlistUrl = "http://api.vschool.io:6543/hitlist.json";
    
        return $http.get(hitlistUrl)
        .then(function(response) {
            return response.data;
        }, function(response) {
            return response;
        })
    
    
}]);