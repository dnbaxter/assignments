var app = angular.module("myApp");

app.service("blueService", function() {
    
    this.bPoints = 100;
    
    this.addBluePoints = function() {
        this.bPoints ++;
        
    }
    this.subtractBluePoints = function() {
        this.bPoints --;
    }
    
    this.reset = function() {
        if (this.bPoints <= 1) {
            this.bPoints = 101;
        } else if (this.bPoints === 199) {
            this.bPoints = 99;
        }
    }
    
    
});