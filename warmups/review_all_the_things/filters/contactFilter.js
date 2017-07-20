angular.module("reviewApp")

.filter("contactFilter", function() {
    
    return function(contacts, type) {
        var filteredContacts = [];
        angular.forEach(contacts, function(contacts) {
            if (contacts.type === type) {
                filteredContacts.push(contacts);
            }
        });
        return filteredContacts;
    }
    
});