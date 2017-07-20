angular.module("reviewApp")

    .controller("businessCtrl", ["$scope", "contactService", function ($scope, contactService) {

        //console.log(contactService)
        //    contactService.getContacts("business")
        //   .then(function (businessContacts) {
        //         $scope.contacts = businessContacts;
        //    });

        contactService.getContacts()
            .then(function (contacts) {
                $scope.associates = contacts;
            });

}]);