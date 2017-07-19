var app = angular.module("cartoonApp", []);

app.controller("mainCtrl", ["$scope", "cartoonService", function($scope, cartoonService) {
    
    $scope.title = "The Powerpull Girls";
    $scope.imgUrl = "http://vignette3.wikia.nocookie.net/powerpuff/images/a/a7/Tumblr_lv8big5jK51qizyws.jpg/revision/latest?cb=20120508020045";
    $scope.description = "Sugar, spice, and everything nice!";
    
    $scope.images = cartoonService.images;
    
    $scope.addCartoon = function() {
		$scope.newImage = { "title": $scope.title, 
							"imgUrl": $scope.imgUrl, 
							"description": $scope.description };
		
		$scope.images = cartoonService.newImage($scope.newImage);
	
	}
    
}]);