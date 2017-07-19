var app = angular.module("bountyApp", []);

app.controller("mainCtrl", ["$scope", "$http", "bountyService", function ($scope, $http, bountyService) {

    // bountyService.getBountyRequest()
    //     .then(function (response) {
    //         console.log(response);
    //         $scope.data = response.data;
    //     })

    $scope.bounties = [];

    $scope.newBounty = {
        firstName: "",
        lastName: "",
        type: "",
        bounty: "",
        living: false
    };

    $scope.submit = function (newBounty) {
        $scope.bounties.push(newBounty);
        console.log(newBounty);
    };

    $scope.getBounty = function () {
        bountyService.getBountyRequest()
            .then(function (response) {
                //console.log(response.data);
                $scope.bounties = response.data;
                $scope.bounties.forEach(function (bounty) {
                    bounty.isBeingEdited = false;
                });
            });
    };

    $scope.editBounty = function(index) {
        console.log(index);
        $scope.bounties[index].isBeingEdited = true;
        console.log($scope.bounties[index]);

    };


    $scope.postBounty = function (newBounty) {
        bountyService.postBountyRequest(newBounty)
            .then(function (response) {
                console.log(response.data);
                $scope.bounties.push(response.data);
                newBounty.isBeingEdited = false;
                $scope.newBounty = {};
            });
    };


    
    $scope.deleteBounty = function (bounty, index) {
        var taskId = bounty._id;
        console.log(taskId);
        //console.log('index: ' + index);
        
        bountyService.deleteBountyRequest(taskId)
            .then(function (response) {
                $scope.bounties.forEach(function (bounty, index) {
                    if (bounty._id === taskId) {
                        $scope.bounties.splice(index, 1);
                    }
                });
            })
    };



    $scope.getBounty();

}]);