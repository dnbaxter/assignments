var app = angular.module("myApp", []);

app.controller("mainCtrl", ["$http", "$scope", function ($http, $scope) {

    $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    }
    
    
    $scope.todoItem = [];

    $scope.newTodo = {
        "title": "",
        "description": "",
        "price": "",
        "imgUrl": "",
        "completed": false
    }

    $scope.submit = function (newTodo) {
        $scope.todoItem.push(newTodo);
        console.log(newTodo);
        //clears input to empty object after submit
        //$scope.newTodo = {};
    }
    
    
    var todoUrl = "https://api.vschool.io/dustin/todo/";
    
    $scope.getTodo = function() {
        $http.get(todoUrl)
        .then(function(response){
            $scope.todoItem = response.data;
            $scope.todoItem.forEach(function(todo){
                todo.isBeingEdited = false;
            });
            console.log($scope.todoItem);
        });
    }
    
    $scope.postTodo = function(newTodo) {
        $http.post(todoUrl, newTodo)
        .then(function(response){
            $scope.todoItem.push(response.data);
            newTodo.isBeingEdited = false;
            $scope.newTodo = {};
        });
    }
    
    $scope.putTodo = function(todo) {
        
    }
    
    $scope.deleteTodo = function(todo) {
        
    }
    
    
    
    
    
    
    $scope.getTodo();
    

}]);