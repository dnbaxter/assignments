var app = angular.module("musicApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/artists", {
            templateUrl: "components/artists/artists.html",
            controller: "artistsCtrl"
        })
        .when("/artists/:id", {
            templateUrl: "components/singleartist/artist.html",
            controller: "singleArtistCtrl"
        })

}]);