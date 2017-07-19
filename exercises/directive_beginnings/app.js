var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$scope", function ($scope) {

//    $scope.name = "Tony Bologna";
//    $scope.email = "realmeats@gmail.com";
//
//    $scope.allen = {
//        name: "Allen Woody",
//        email: "email@email.com"
//    }
//    $scope.bif = {
//        name: "Bif Wood",
//        email: "iamfromthepast@gmail.com"
//    }
    $scope.greet = function() {
        $scope.greeting = "Hello, " + $scope.name;
    }

}]);

//app.directive("myInfo", function () {
//
//    //    return {
//    //        //restrict: "C", // use to allow the use of div class
//    //        // CAE for div class, default tag, and div tag
//    //        template: "<h1>Hello, my name is Slim Shady.</h1>"
//    //    }
//
//    //    return {
//    //        restrict: "CAE",
//    //        template: "<span>{{name}} -- reach me at {{email}}</span>"
//    //    }
//
////    return {
////        restrict: "A",
////        scope: {
////            'contactInfo': "=myInfo"
////        },
////        template: "<span>{{contactInfo.name}} -- reach me at {{contactInfo.email}}</span>"
////    }
//
//});


app.directive("onEnter", function () {

    var link = function (scope, element, attrs) {
        element.on("keydown", function(event) {
            if (event.which === 13) {
                scope.$apply(function() {
                    scope.$eval(attrs.onEnter);
                });
                event.preventDefault();
            }
        });
    };
    return {
        restrict: "A",
        link: link
    }

});