//document.getElementById("goombasCaught").innerHTML = 60 + " coins";
//document.getElementById("bobombsCaught").innerHTML = 56 + " coins";
//document.getElementById("cheepcheepsCaught").innerHTML = 55 + " coins";


//var moreCoins1 = document.getElementById("Goomba").value;
//document.getElementById("goombasCaught").innerHTML = parseInt(moreCoins1) * 5;


var total = 0;
var total2 = 0;
var total3 = 0;
var totalKilled1 = 0;
var totalKilled2 = 0;
var totalKilled3 = 0;

function handle1(e) {
    var moreCoins1 = document.getElementById("Goombas").value;
    //var baddiesKilled = document.getElementById("Goombas").value;
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that runs
        total += moreCoins1 * 5;
        document.getElementById("goombasCaught").innerHTML = total + " coins";
        document.getElementById("totalCoins").innerHTML = total + total2 + total3 + " coins";
    }
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that runs
        var baddiesKilled = parseInt(document.getElementById("Goombas").value);
        var killed = totalKilled1 += baddiesKilled;
        document.getElementById("goombasKilled").innerHTML = killed + " killed";
        document.getElementById("totalKilled").innerHTML = totalKilled1 + totalKilled2 + totalKilled3 + " killed";
    }
}

function handle2(e) {
    var moreCoins2 = document.getElementById("Bob-ombs").value;
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that runs
        total2 += moreCoins2 * 7;
        document.getElementById("bobombsCaught").innerHTML = total2 + " coins";
        document.getElementById("totalCoins").innerHTML = total + total2 + total3 + " coins";
    }
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that runs
        var baddiesKilled = parseInt(document.getElementById("Bob-ombs").value);
        var killed = totalKilled2 += baddiesKilled;
        document.getElementById("bobombsKilled").innerHTML = killed + " killed";
        document.getElementById("totalKilled").innerHTML = totalKilled1 + totalKilled2 + totalKilled3 + " killed";
    }
}

function handle3(e) {
    var moreCoins3 = document.getElementById("Cheep-Cheeps").value;
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that runs
        total3 += moreCoins3 * 11;
        document.getElementById("cheepcheepsCaught").innerHTML = total3 + " coins";
        document.getElementById("totalCoins").innerHTML = total + total2 + total3 + " coins";
    }
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that runs
        var baddiesKilled = parseInt(document.getElementById("Cheep-Cheeps").value);
        var killed = totalKilled3 += baddiesKilled;
        document.getElementById("cheepcheepsKilled").innerHTML = killed + " killed";
        document.getElementById("totalKilled").innerHTML = totalKilled1 + totalKilled2 + totalKilled3 + " killed";
    }
}