var app = angular.module("MyApp");

app.service("yodaSpeakService", ["$http", function ($http, textInput) {

    var yodaUrl = "https://yoda.p.mashape.com/yoda?sentence=";
    var mashapeKey = "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm";

    this.yodaSpeakRequest = function (textInput) {

        return $http.get(yodaUrl + textInput, {
                headers: {
                    "X-Mashape-Key": mashapeKey
                }
            })
            .then(function (response) {
                return response;
            }, function (response, error) {
                return response;
            })

    }

}]);