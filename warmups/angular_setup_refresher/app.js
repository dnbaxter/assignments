var app = angular.module("myApp", []);

app.controller("mainController", ["$scope", function ($scope) {

    //$scope.sum = [];

    $scope.submit = function (num) {
        //console.log(num.Number1);
        $scope.sum = parseFloat(num.Number1) + parseFloat(num.Number2);
        console.log($scope.sum);

        return $scope.sum;

    }

    $scope.submit2 = function (product) {
        //console.log(num.Number1);
        $scope.multiply = product.Number3 * product.Number4;
        console.log($scope.multiply);

        return $scope.multiply;

    }

}]);


app.directive('number', function() {
  return {
    require: 'ngModel',
    link: function (scope, element, attr, ngModelCtrl) {
      function fromUser(text) {
        var transformedInput = text.replace(/[^0-9]/g, '');
          if (text === '') {
              
          }
        //console.log(transformedInput);
        if(transformedInput !== text) {
            ngModelCtrl.$setViewValue(transformedInput);
            ngModelCtrl.$render();
        }
        return transformedInput;
      }
      ngModelCtrl.$parsers.push(fromUser);
    }
  }; 
});

//app.controller('MainCtrl', function($scope) {
//});



//$scope.badges = [];
//
//    $scope.submit = function (user) {
//        $scope.badges.push(user);
//        $scope.user = {};
//    }