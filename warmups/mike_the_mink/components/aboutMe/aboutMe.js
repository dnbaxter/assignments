var app = angular.module("minkApp");

app.controller("aboutMeCtrl", ["$scope", function($scope) {
    
        $scope.tasks = [
        {name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, enim, quibusdam? Dolore expedita, cumque. Earum nobis enim repellendus iure, saepe, quibusdam praesentium temporibus? Accusantium aspernatur velit animi, odit vel, autem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, laudantium tempora error eveniet aliquam, accusantium, quae laboriosam nostrum et ut dolorem quos ipsum enim doloremque voluptatem minus quidem in ratione!'},
        {name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nemo inventore, aperiam sunt fugiat vitae optio numquam sed temporibus, dignissimos magni quasi, tempora tenetur possimus quisquam itaque. Nihil, alias, autem!'},
        {name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nihil, amet perspiciatis exercitationem voluptate earum delectus facilis velit et animi, quam magnam asperiores modi illo. Tenetur ea amet, cumque voluptatum.'}
    ];
    
    $scope.hoverInTwo = function(){
        this.hoverEdit = true;
    };

    $scope.hoverOutTwo = function(){
        this.hoverEdit = false;
    };
    
}]);