var app = angular.module("myApp");

app.controller("addCtrl", ["$scope", "pokeService", function ($scope, pokeService) {


    $scope.newPoke = "";
    $scope.pokemonList = pokeService.pokemon;



    $scope.addPokemon = function (name) {
        pokeService.storePokemon(name);

        console.log(pokeService.pokemon);
        $scope.newPokemon = "";
    }

    $scope.deletePokemon = function (newPokemon) {
        pokeService.deletePokemon(newPokemon);

        console.log(pokeService.pokemon)
        $scope.newPokemon = "";
    }

    $scope.add = function (index) {
        //        console.log();
        $scope.newPokemon = $scope.pokemonList[index];
    }


}]);