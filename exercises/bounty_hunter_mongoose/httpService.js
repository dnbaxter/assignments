var app = angular.module("bountyApp");

app.service("bountyService", ["$http", function ($http) {

    const self = this;
    const url = "http://localhost:7171/bounties/";

    self.getBountyRequest = function () {
        return $http.get(url)
            .then(function (response) {
                return response;
            }, function (response) {
                return response;
            })
    };
    
    self.postBountyRequest = function (newBounty) {
        return $http.post(url, newBounty)
            .then(function (response) {
                return response;
            }, function (response) {
                return response;
            })
    };

    self.deleteBountyRequest = function (bountyId) {
        return $http.delete(url + bountyId)
            .then(function (response) {
                return response;
            }, function (response) {
                return response;
            })
    }

}]);