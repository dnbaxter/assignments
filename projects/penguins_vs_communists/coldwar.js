var Party = function (party, population) {
    this.party = party;
    this.population = population;
};

var penguins = new Party("Penguins", 1000000);
var communists = new Party("Communists", 1000000);
var penguinsLife = penguins.population;
var communistsLife = communists.population;


function runGame() {
    var interval = setInterval(function () {
        var party;
        var pick = Math.random();
        if (pick < .5) {
            party = penguins.party;
        } else {
            party = communists.party;
        }
        sendNuke(party, onHit, onMiss);
        console.log("===============================================================================\n\n\n\n");


        if (penguinsLife <= 0) {
            clearInterval(interval);
            console.log("||The Penguins have been exterminated.||\n\n");
        } else if (communistsLife <= 0) {
            clearInterval(interval);
            console.log("||The Communists have been exterminated.||\n\n");
        }
    }, 1500);
}



function sendNuke(party, onHit, onMiss) {
    console.log("===============================================================================");
    console.log("--The " + party + " are being attacked--\n");
    var randomAttack = Math.floor(Math.random() * 3) + 1;
    if (randomAttack === 3) {
        onHit(party);
    } else {
        onMiss(party);
    }

    var randomDamage = Math.floor(Math.random() * 200000) + 100000;
    if (party === "Penguins") {
        penguinsLife = penguinsLife - randomDamage;
        console.log("The Communists counter and attack back.");
        console.log("The Penguins lose " + randomDamage + " of their population and are left with " + penguinsLife + ".\n");
    } else {
        communistsLife = communistsLife - randomDamage;
        console.log("The Penguins counter and attack back");
        console.log("The Communists lose " + randomDamage + " of their population and are left with " + communistsLife + ".\n");
    }

}

function onHit(party) {
    console.log("The attack was successful, the " + party + " hit them head on!\n");
    var randomDamage = Math.floor(Math.random() * 125000) + 75000
    if (party === "Penguins") {
        communistsLife = communistsLife - randomDamage;
        console.log("The Penguins counter and attack back");
        console.log("The Communists lose " + randomDamage + " of their population and are left with " + communistsLife + ".\n");
    } else {
        penguinsLife = penguinsLife - randomDamage;
        console.log("The Communists counter and attack back.");
        console.log("The Penguins lose " + randomDamage + " of their population and are left with " + penguinsLife + ".\n");
    }
}

function onMiss(party) {
    console.log("The attack missed, the " + party + " are becoming angered...");
}


runGame();



/**************************************************
 * set interval timing for game
 **************************************************/
//function delay(party) {
//    runGame();
//    if (penguinsLife <= 0 || communistsLife <= 0) {
//        clearInterval(interval);
//    }
//}
//var interval = setInterval(runGame, 1500);