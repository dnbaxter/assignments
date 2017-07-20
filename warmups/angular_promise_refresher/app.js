var app = angular.module("mainApp", []);

app.controller("mainCtrl", ["$scope", "httpService", function ($scope, httpService) {

    $scope.next = "";
    $scope.get10 = function (page) {

        httpService.getRequest(page)
            .then(function (response) {
                return response;
            })

    }

}]);


app.service("httpService", ["$http", function ($http) {

    var self = this;
    this.next = "http://swapi.co/api/people/"
    
    this.getRequest = function (page) {
        var config = {
            params: {
                page: page,
            }
        };

        return $http.get(this.next)
            .then(function (response) {
                    console.log(response.data);
                    self.next = response.data.next;
                    return response.data;
                },
                function (response) {
                    console.log(response.status);
                    console.log(response);
                })

    }
    
}]);