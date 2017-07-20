angular.module("reviewApp")

.controller("contactsCtrl", ["$scope", "$routeParams", "contactService", function($scope, $routeParams, contactService) {
    
    $scope.type = $routeParams.contactType;
    
    contactService.getContacts()
            .then(function (contacts) {
                $scope.contacts = contacts;
            });
    
}]);