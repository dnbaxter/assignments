var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "yodaSpeakService", function ($scope, yodaSpeakService) {

    $scope.title = "Speak like Yoda, you will.";
    $scope.textInput = "";


    $scope.translate = function (textInput) {

        yodaSpeakService.yodaSpeakRequest(textInput)
            .then(function (response) {
                $scope.yodaSpeak = response.data;
            })

    }

}]);