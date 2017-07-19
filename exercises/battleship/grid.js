var Location = require("./location");

function Game() {
    var grid = [];
    
    
    for (i = 0; i < 10; i++) {
        grid.push([]);
        for (y = 0; y < 10; y++) {
            grid[i].push(new Location());
        }
    };
    
    this.displayGrid = function() {
        let gridDisplay = [];
        for(i = 0; i < 10; i++) {
            gridDisplay.push([]);
            for(y = 0; y < 10; y++) {
                gridDisplay[i].push(grid[i][y].display)
            }
        }
        console.log(gridDisplay);
    };

    this.grid = grid;
    
    
    
}






let game = new Game();
game.displayGrid();