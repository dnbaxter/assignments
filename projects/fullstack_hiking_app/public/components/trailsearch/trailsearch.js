var app = angular.module("trailApp");

app.controller("trailSearchCtrl", ["$scope", "$window", "trailSearchService", function ($scope, $window, trailSearchService) {

    $(function() {
        $('body').removeClass('fade-out');
    });

    $scope.getTrailRequest = function (trail) {
        console.log(trail.name);
        trailSearchService.name = trail.name;
        $window.location.href = '#!/trailinfo';
    }

}]);