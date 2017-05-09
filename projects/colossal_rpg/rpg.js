var readline = require('readline-sync');
var enemies;


var Constructor = function (name, health = 150, power = 500) {
    this.name = greetingCreation();
    this.health = health;
    this.power = power;
}

var user = new Constructor();

function greetingCreation() {
    console.log("   __")
console.log("  |  ''--.--.._                                             __..   ,--.")
console.log("  |       `.   '-.'''\_...-----..._   ,--. .--..-----.._.''|   |   /  /")
console.log("  |_   _    \__   ).  \           _/_ |   \| ||    ..    >  `.   |  /  /")
console.log("    | | `.   |_)  /|\  \ .-'''':-'   '-.   `||  |.'  ,'`.  |    |_/_ /")
console.log("    | |_.'   |   / ''`\\ ===/  ..|..  \\    ||      < ''  `.  '   |/ __")
 console.log("    |      .    \ ,--   \-..-\   /'\   /      ||  |>   )--   |  ----/    |")
 console.log("    |__..-'__||__\   |___\ __.:-.._..-'_|\___||____..-/  |__|--''_______/")
 console.log("                          _______________________")
 console.log("                         /                      ,'")
 console.log("                        /      ___            ,'")
 console.log("                       /   _.-'  ,'        ,-'   /")
 console.log("                      / ,-' ,--.'        ,'   .'/")
 console.log("                     /.'     `.         '.  ,' /")
 console.log("                    /      ,-'       ,'--','  /")
 console.log("                         ,'        ,'  ,'    /")
 console.log("                        ,-'      ,' .-'     /")
 console.log("                     ,-'                   /")
 console.log("                   ,:________________Seal_/")
    console.log("Greetings there new player. Welcome to the crazy and deadly world of Dragon Ball Z. Before we can embark on an awesome journey to better our martial arts and increase our power level by defeating enemies that could potentially kill us, please tell me who to refer to you as.\n")
    var name = readline.question("Please tell me your name: \n");
    console.log("\nWelcome " + name + "!\n" + "Next, tell me the preferred location you would like your journey to take place. The place where you will hopefully achieve a power level over 9000!\n");
    var location = readline.question("Please enter location: \n");
    console.log("Awesome! Alright " + name + ", time to start your journey in " + location + ".\n");

    console.log("As trivial as this sounds, we both can't do anything unless you tell me what to do, so in this case, if you would like to walk, you'll need to tell me. Let's do this you awesome powerful person you! Just kidding, you're weak as crap\n")

    return name;
}

function walk(name, health) {
    var response = readline.question("Please type in 'W' to walk or type 'H' to see your health: \n").toUpperCase();
    
    if (response === "H") {
        console.log("Your health is current at: " + user.health);
        walk(name, health, enemies);
    }
    if (response === "W") {
        var possibility = Math.random() * 4;

        if (possibility <= 1) {
            enemyCreation();
            if (enemies.type === "Vegeta") {
                console.log("                                    ,") 
console.log("                               ,   ,'|")
console.log("                             ,/|.-'   \.")
console.log("                          .-'  '       |.")
console.log("                    ,  .-'              |")
console.log("                   /|,'                 |'")
console.log("                  / '                    |  ,")
console.log("                 /                       ,'/")
console.log("              .  |          _              /")
console.log("               \`' .-.    ,' `.             |")
console.log("                \ /   \ /       \\           /")
console.log("                 \|    V        ||         |  ")
console.log("                  (            ) /.--.   '/      V E G E T A  || HP: " + enemies.hitPoints + " ||")
console.log("                  'b.`. ,' _..'' 6)|   ,-'")
console.log("                    \'= --''  )   ' /.-'")
console.log("                     \ / `---'   .''|'")
console.log("                      \"..-    .'  |.")
console.log("                       `-__..-','   |")
console.log("                     __.) ' .-'/    /\._")
console.log("               _.--'/----..--------. _.-'-._")
console.log("            .-'_)   \.   /     __..-'     _.-'--.")
console.log("           / -'/     ''''''''''         ,'-.   . `.")
console.log("          | ' /                        /    `   `. '")
console.log("          |   |                        |         | |")
console.log("           \ .'\                         |     \    | |")
console.log("          / '  | ,'               . -  \`.    |   / /")
console.log("         / /   | |                      `/'--. -' /")
console.log("        | |     \\ \\                     /     \    |")
console.log("        | \      | \                  .-|      |    |")
            } else if (enemies.type === "Piccolo") {
                console.log("                              ____")
console.log("                          .-''    ''--.")
console.log("                        ,'             `.")
console.log("                       /     ,'          |")
console.log("                    `\/     .             |")
console.log("                 .===:_,  |              /")
console.log("                 / .''''.  ,:=:.        / _.,")
console.log("                '   `--. `|/  _\\` (    _/-' /")
console.log("                     |\\_b_-_'_____ ) -'-'//'")
console.log("                     | --/`--_o'_/'  (6_//")
console.log("   P I C C O L O     / ,'    -''    .),-'")
console.log("    || HP: " + enemies.hitPoints + " ||" + "     (  '-____       `-(")
console.log("                      \\\\| | |/    /    '")
console.log("                       \\ ---  _./      `-._..._")
console.log("                        7----','/     ..-' .-- '--.._")
console.log("                 _.._.-/)  .-',/   .-'  -''           ''--..")
console.log("          _..--'|=''--..--''''''./'  .              .-'''-.'")
console.log("        ,' .-','     ,'       /.   /              .'       \\")
console.log("     .:' ,' ,:      /      ,/'/  /'         _....' _..--''' )")
console.log("   ,'/  /  /(      /   _,/' / ,/'         /.    .-'       __|")
console.log("  / / /'  (  ''----''''   / ,/           / `:.-'    _.--''  /")
console.log("  ||  (    \\_       __.-'  /             |`-.`:=._-'    _.-:|")
console.log("  \\/   \\     '''''''      /               ''-`  `-'===='-'   '")
console.log("  |     '-.        __..-''                    \._.====..       |")
console.log("  |        ''--''''                          //..---''\\       .")
console.log("  \                           _Seal_       /'| __...---.\      |")
            }
            
            console.log("\nYou've run into an enemy! " + enemies.type + " is looking for blood. " + enemies.type + " has " + enemies.hitPoints + "HP." + " Would you like to try to run away, or fight?\n");
            var action = readline.question("Would you like to 'run' or 'fight'?\n").toUpperCase();
            if (action === "RUN") {
                run(name, health);
            } else if (action === "FIGHT") {
                fight(name, health, enemies);
            }

        } else if (possibility <= 2 && possibility > 1) {
            console.log("\nNothing happened! No enemies\n");
        } else if (possibility <= 3 && possibility > 2) {
            console.log("\nYou found an apple and eat it! +5 HP.\n");
            user.health += 5;
        } else {
            console.log("\nYou stop to check your inventory. You're silly " + name + ", all you have is a dirty tissue, gross. Luckily you're still alive with " + user.health + " health, to continue walking, type in 'w'.\n");
        }
        while (user.health > 0) {
            walk(name, health);
            if (user.health <= 0) {
                die(name);
            }
        }
    }
}

function run(name, health) {
    var possibility = Math.random() * 2;
    if (possibility <= 1) {
        console.log("You successfully ran away " + name + ", congratulations you panzy. Your power-level remained the same.")
    } else {
        console.log("You were unable to get away " + name + ". " + enemies.type + " is about to destroy every atom in your body.");
        fight(name, health, enemies);
    }
}

function fight(name, health) {
    var action = readline.question("As " + enemies.type + " stares at you with desire for blood in his eyes, you notice one last chance to either, 'run' or 'fight'?\n").toUpperCase();
    if (action === "RUN") {
        run(name, health);
    } else {
        enemyAttack(name, health, enemies);
    }

}

function attackEnemy(name, health) {
    var playerDamage = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    
    if (user.power >= 2500 && user.power < 5000) {
        console.log("With increased power levels you manage to charge up a destruco disc and hurl it at " + enemies.type)
        var playerDamage = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
    } else if (user.power >= 5000 && user.power < 7500) {
        console.log("Through greater power you charge up your special beam cannon and launch it at " + enemies.type)
        var playerDamage = Math.floor(Math.random() * (35 - 15 + 1)) + 15;
    } else if (user.power >= 7500 && user.power < 9000) {
        console.log("With sheer raw power you charge up a massive Kamehameha and hurl it at " + enemies.type)
        var playerDamage = Math.floor(Math.random() * (45 - 20 + 1)) + 20;
    } else if (user.power >= 9000) {
        console.log("With extreme power and focus you summon a spirit bomb and hurl it at " + enemies.type)
        var playerDamage = Math.floor(Math.random() * (60 - 25 + 1)) + 25;
    }



    console.log("***You manage to hit " + enemies.type + " for " + playerDamage + " damage.***");
    if (playerDamage <= 7) {
        console.log("Pathetic!\n")
    } else if (playerDamage <= 14 && playerDamage > 7) {
        console.log("Not bad!\n")
    } else if (playerDamage <= 21 && playerDamage > 14) {
        console.log("Excellent hit!\n")
    }
    enemies.hitPoints -= playerDamage;

    if (enemies.hitPoints > 0) {
        enemyAttack();
    } else if (enemies.hitPoints <= 0) {
        console.log("\n\nCongratulations " + user.name + " you ACTUALLY managed to kill " + enemies.type + ". What a surprise!")
        user.health += 25
        if (enemies.type === "Cell") {
            user.power += 1500
        } else if (enemies.type === "Frieza") {
            user.power += 1000
        } else if (enemies.type === "Vegeta") {
            user.power += 500
        } else if (enemies.type === "Piccolo") {
            user.power += 300
        }

        console.log(">> The defeated " + enemies.type + " dropped a half used sensu bean. You quickly consume it and recover 25 HP, you're health is now: " + user.health + ".\n");
        console.log("||   After defeating " + enemies.type + " you notice that you became stronger after the fight. Your power-level increases to: " + user.power + "   ||\n");


        if (user.power >= 2500 && user.power < 5000) {
            console.log("————————————————————————————————")
            console.log("||You've reached a new power!!||\n");
            console.log("————————————————————————————————")
            var playerDamage = Math.floor(Math.random() * (25 - 5 + 1)) + 10;
            return playerDamage;
        } else if (user.power >= 5000 && user.power < 7500) {
            console.log("—————————————————————————————————————————")
            console.log("||You've reached an even higher power!!||\n");
            console.log("—————————————————————————————————————————")
        } else if (user.power >= 7500 && user.power < 9000) {
            console.log("———————————————————————————————————————")
            console.log("||Holy Crap, you're becoming strong!!||\n");
            console.log("———————————————————————————————————————")
        }
        if (user.power >= 9000) {
            console.log("********************************************")
            console.log("*Holy crap! Your power-level is over 9000!!*\n");
            console.log("********************************************")
            beatTheGame();
        }
    }
}

function enemyAttack(name, health, power) {

    if (enemies.type === "Cell") {
        var enemyDamage = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    } else if (enemies.type === "Frieza") {
        var enemyDamage = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
    } else if (enemies.type === "Vegeta") {
        var enemyDamage = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    } else if (enemies.type === "Piccolo") {
        var enemyDamage = Math.floor(Math.random() * (7 - 4 + 1)) + 4;
    }
    console.log("\n" + enemies.type + " hits you for " + enemyDamage + " damage." + "\t\t >>Enemy HP: " + enemies.hitPoints + "  ");
    user.health -= enemyDamage;
    console.log("You are now left with " + "\t\t\t >>Your  HP: " + user.health + " ");
    if (enemies.hitPoints > 0) {
        attackEnemy(name, health);
    } else if (user.health <= 0) {
        die(name);
    } 
}

function die(name) {
    console.log("You died, how pathetic.")
}

function enemyDie(enemies) {
    // creates empty object under enemies
    enemies = {};
}

function beatTheGame() {
    console.log("\n\nCongratulations, you beat the game! Now get a life.\n\n");
    this
}







function enemyCreation() {
    enemies = new EnemyConstructor();
}

var EnemyConstructor = function (type, hitPoints) {
    this.type = generateType();
    this.hitPoints = enemyHitPoints(this.type);
}

function generateType() {
    var enemy = ["Cell",
                 "Frieza",
                 "Vegeta",
                 "Piccolo"];

    var i = Math.floor(enemy.length * Math.random());

    return enemy[i];
}

function enemyHitPoints(type) {
    if (type === "Cell") {
        return Math.floor(Math.random() * (100 - 80 + 1)) + 80;
    } else if (type === "Frieza") {
        return Math.floor(Math.random() * (79 - 50 + 1)) + 50;
    } else if (type === "Vegeta") {
        return Math.floor(Math.random() * (49 - 20 + 1)) + 20;
    } else if (type === "Piccolo") {
        return Math.floor(Math.random() * (29 - 10 + 1)) + 10;
    }
}


walk(user.name, user.health, user.power);