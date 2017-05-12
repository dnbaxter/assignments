var marioStatus = ["Star", "Powered Up", "Big", "Small", "Dead"];
var player = {
    name: "",
    totalCoins: 42,
    status: marioStatus[2],
    star: false,
    gameActive: true,
    setName: function (namePicked) {
        this.name = namePicked
    },


    gotHit: function () {
        if (this.status === "Powered Up") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Small"
        } else if (this.status === "Small") {
            this.status = "Dead";
            this.gameActive = false
        }
    },

    powerUp: function () {
        if (this.status === "Star") {
            this.status = "Industructible"
        } else if (this.status === "Powered Up") {
            this.status = "Star"
        } else if (this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Small") {
            this.status = "Big"
        }
    },

    addCoin: function () {
        this.totalCoins++;
    },

    print: function () {
        console.log("\n\tName: " + this.name + "\n\tTotal Coins: " +
            this.totalCoins + "\n\tStatus: " + this.status +
            "\n\tStar: " + this.star + "\n")
    },
}


function pickName() {
    var pick = Math.random();
    if (pick < .5) {
        player.setName("Mario")
    } else {
        player.setName("Luigi")
    }
}

function random() {
    var num = Math.floor(Math.random() * 3);
    if (player.gameActive === false) {
        console.log("\n\tGAME OVER\n");
        return
    }
    if (num === 0) {
        player.gotHit();
        player.print();
    } else if (num === 1) {
        player.powerUp();
        player.print();
    } else if (num === 2) {
        player.addCoin();
        player.print();
    }
    if (player.status === "Dead") {
        console.log("\n\tGAME OVER\n");
        return
    }
}

pickName();
random();
random();
random();