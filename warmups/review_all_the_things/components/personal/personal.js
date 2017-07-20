angular.module("reviewApp")

    .controller("personalCtrl", ["$scope", "contactService", function ($scope, contactService) {

        //console.log(contactService)
        //    contactService.getContacts("personal")
        //    .then(function(personalContacts) {
        //        $scope.contacts = personalContacts;
        //    });

        contactService.getContacts()
            .then(function (contacts) {
                $scope.friends = contacts;
            });

}]);