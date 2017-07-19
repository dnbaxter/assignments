var app = angular.module("myApp");

app.controller("showCtrl", ["$scope", "pokeService", function($scope, pokeService) {
    
    $scope.pokemonList = pokeService.pokemon;
    
    
    $scope.add = function(index) {
//        console.log();
        $scope.newPokemon = $scope.pokemonList[index];
    }
    
}]);