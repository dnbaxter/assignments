angular.module("reviewApp", ["ngRoute"])
.config(["$routeProvider", function($routeProvider) {
    
    $routeProvider
    .when("/:contactType", {
        templateUrl: "components/contacts/contacts.html",
        controller: "contactsCtrl"
    })
//    .when("/personal", {
//        templateUrl: "components/personal/personal.html",
//        controller: "personalCtrl"
//    })
//    .when("/business", {
//        templateUrl: "components/business/business.html",
//        controller: "businessCtrl"
//    })
//    .when("/school", {
//        templateUrl: "components/school/school.html",
//        controller: "schoolCtrl"
//    })
    
}]);