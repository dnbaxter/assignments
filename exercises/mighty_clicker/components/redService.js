var app = angular.module("myApp");

app.service("redService", function() {
    
    this.rPoints = 100;
    
    this.addRedPoints = function() {
        this.rPoints ++;
    }
    this.subtractRedPoints = function() {
        this.rPoints --;
    }
    
    this.reset = function() {
        if (this.rPoints <= 1) {
            this.rPoints = 101;
        } else if (this.rPoints === 199) {
            this.rPoints = 99;
        }
    }
    
});