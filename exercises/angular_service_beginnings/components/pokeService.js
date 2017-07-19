var app = angular.module("myApp");

app.service("pokeService", function() {
    
    this.pokemon = ["Mewtwo", "Pikachu", "Charmander"];
    
    this.storePokemon = function(newPokemon) {
        if (newPokemon === "" || newPokemon === undefined) {
            alert("Input is empty")
        } else {
            this.pokemon.push(newPokemon);
        }
    }
    this.deletePokemon = function(newPokemon) {
        if (newPokemon === "" || newPokemon === undefined) {
            alert("Input is empty")
        } else {
            this.pokemon.splice(this.pokemon.indexOf(newPokemon), 1);
        }
    }
    
    
    
});