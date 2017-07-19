var app = angular.module("wishlistApp");

app.controller("cpTechCtrl", ["$scope", function($scope) {
    
    $scope.cpTechList = [
        {
            name: "Galaxy S8+",
            price: "724.99",
            imgUrl: "http://www.samsung.com/global/galaxy/galaxy-s8/images/gallery/galaxy-s8-plus_gallery_front_black_s4.png"
        },
        {
            name: "Nvidia Titan XP",
            price: "1432.15",
            imgUrl: "http://images.nvidia.com/pascal/img/titanxp/titan-xp-design.png"
        }
    ]
    
}]);