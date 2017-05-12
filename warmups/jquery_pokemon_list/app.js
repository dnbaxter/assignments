$.ajax({
    url: "http://pokeapi.co/api/v1/pokedex/1/",
    method: "GET",
    success: function (data) {
        var pokemon = data.pokemon;
        
        //var uri_array = data.pokemon.resource_uri.split("/");
        //console.log(uri_array)

        console.log(data)
        
        

        for (var i = 0; i < pokemon.length; i++) {    
            let singlePokemon = `<h3 id=index${i}> ${[i + 1]}. <a href="https://www.google.com/search?q=${pokemon[i].name}">${pokemon[i].name} </a></h3>`;
            
            $(".pokemon ol").append(singlePokemon);
            //console.log(singlePokemon);
            i = i.toString();
            //console.log(i)
            $("#index" + i).click(function () {
//            alert("Clicked")
        }); 
        }

        //console.log(pokemon[0]);
        $(".pokemon ol").click(function () {

            $(this).css("color", "darkred");
            $(this).css("background", "silver");

        });
        
    }
});