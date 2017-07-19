var app = angular.module("wishlistApp");

app.controller("otherTechCtrl", ["$scope", function($scope) {
    
    $scope.otherTechList = [
        {
            name: "LG OLED65C6P",
            price: "3499.99",
            imgUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5252/5252602_sd.jpg;maxHeight=550;maxWidth=642"
        },
        {
            name: "Canon EOS 5D Mark IV Full Frame Digital SLR Camera Body",
            price: "3299.00",
            imgUrl: "https://d25tv1xepz39hi.cloudfront.net/2016-08-24/files/eos-5d-mark-iv_1377b.jpg"
        },
        {
            name: "Garmin GPSMAP 64st, TOPO U.S. 100K with High-Sensitivity GPS and GLONASS Receiver",
            price: "273.84",
            imgUrl: "http://dm0yv73xe8whs.cloudfront.net/media/catalog/product/cache/1/image/360x405/0dc2d03fe217f8c83829496872af24a0/6/4/64st_4.jpg"
        }
    ]
    
}]);