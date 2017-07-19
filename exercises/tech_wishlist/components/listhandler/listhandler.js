angular.module("wishlistApp");


app.directive("listHandler", function() {
	return {
		restrict: 'AE',
		templateUrl: 'components/listhandler/listhandler.html',
		scope: {
			wishlist : '='
		}
	}
});