angular.module("reviewApp")

.controller("schoolCtrl", ["$scope", "contactService", function($scope, contactService) {
    
    contactService.getContacts()
    .then(function(contacts) {
        $scope.schoolBuddies = contacts;
    });
    
}]);