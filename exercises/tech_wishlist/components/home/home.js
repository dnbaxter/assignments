var app = angular.module("wishlistApp");

app.controller("homeCtrl", ["$scope", function($scope) {
    
    $scope.css = 'cosmo';
    $scope.bootstraps = [
        {
            name: 'Basic',
            url: 'cosmo'
        },
        {
            name: 'Slate',
            url: 'slate'
        },
        {
            name: 'Sandstone',
            url: 'sandstone'
        },
        {
            name: 'Flatly',
            url: 'flatly'
        }
	];


    //names of links in the navbar
    $scope.navLinks = [
        {
            name: "Computer & Phone Tech",
            url: "#!/computerphonetech"
        },
        {
            name: "OtherTech",
            url: "#!/othertech"
        }
    ]
    
}]);