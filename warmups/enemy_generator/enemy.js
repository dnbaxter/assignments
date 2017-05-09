var enemies = [];

var EnemyConstructor = function (type, hitPoints, defense) {
    this.type = generateType();
    this.hitPoints = enemyHitPoints(this.type);
    this.defense = enemyDefense(this.hitPoints);
}


function generateType() {
    var enemy = ["Ancient Dragon",
                 "Prowler",
                 "Mighty Grunt"];

    var i = Math.floor(enemy.length * Math.random());

    return enemy[i];
}

function enemyHitPoints(type) {
    if (type === "Ancient Dragon") {
        return Math.floor(Math.random() * (100 - 80 + 1)) + 80;
    } else if (type === "Prowler") {
        return Math.floor(Math.random() * (79 - 50 + 1)) + 50;
    } else if (type === "Mighty Grunt") {
        return Math.floor(Math.random() * (49 - 20 + 1)) + 20;
    }
}

function enemyDefense(hitPoints) {
    return hitPoints * 3;
}

for (var i = 0; i < 100; i++) {
    var bad = new EnemyConstructor();
    enemies.push(bad);
}
console.log(enemies);