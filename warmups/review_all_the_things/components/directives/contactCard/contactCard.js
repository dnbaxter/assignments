angular.module("reviewApp")

.directive("contactCard", [ function() {
    
    return {
        restrict: "E",
        templateUrl: "components/directives/contactCard/contactCard.html",
        scope: {
            contact: "="
        }
    }
    
}]);