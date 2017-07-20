angular.module("reviewApp")

.service("contactService", ["$http", function($http) {
    
//    this.getContacts = function(contactType) {
//        return $http.get("contacts.json")
//        .then(function(response) {
//            var allContacts = response.data;
//            var personalContacts = allContacts.filter(function(contact) {
//                return contact.type === contactType;
//            });
//            return personalContacts;
//        })
//    }
    
    this.getContacts = function(contactType) {
        return $http.get("contacts.json")
        .then(function(response) {
            return response.data;
        })
    }
    
//    this.getPersonalContacts = function() {
//        return $http.get("contacts.json")
//        .then(function(response) {
//            var allContacts = response.data;
//            var personalContacts = allContacts.filter(function(contact) {
//                return contact.type === "personal";
//            });
//            return personalContacts;
//        })
//    };
//    
//    this.getBusinessContacts = function() {
//        return $http.get("contacts.json")
//        .then(function(response) {
//            var allContacts = response.data;
//            var businessContacts = allContacts.filter(function(contact) {
//                return contact.type === "business";
//            });
//            return businessContacts;
//        })
//    }
    
}]);