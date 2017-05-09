var xhr = new XMLHttpRequest();
var singlePokemon = "";

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var pokemon = data.objects[0].pokemon;
        //console.log(pokemon);

        //        console.log(data.objects[0].pokemon[150])
        //        document.getElementById("name").innerHTML = "<h1>" + data.objects[0].pokemon[1].name + "<br>" + data.objects[0].pokemon[2].name + "<br>" + data.objects[0].pokemon[732].name + "</h1>"


        for (var i = 0; i < pokemon.length; i++) {
            //singlePokemon = pokemon[i].name;
            //console.log(pokemon[i].name);
            //console.log(singlePokemon);
            singlePokemon += pokemon[i].name + "<br><br>\n";
            console.log(singlePokemon);
        }
        //console.log(singlePokemon);
        document.getElementById("results").innerHTML = "<h2>" + singlePokemon + "</h2>";
        

    }
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();

// 128 mewtwo