(function() {
    function SearchCtrl($http, $scope) {
        $http({
            method: 'GET',
            url: '/searchbeers'
        }).then(function success(response) {
            $scope.beerResults = response.data;
        }, function error(response) {
            console.log("Error");
        });
        
        $http({
            method: 'GET',
            url: '/searchbreweries'
        }).then(function success(response) {
            $scope.breweryResults = response.data;
        }, function error(response) {
            console.log("Error");
        });
    }
    
    angular
        .module('knowYourBeer')
        .controller('SearchCtrl', ['$http', '$scope', SearchCtrl]);
 })();