(function() {
    function SearchCtrl($http, $scope) {
        $http({
            method: 'GET',
            url: '/search'
        }).then(function success(response) {
            $scope.beerResults = response.data;
        }, function error(response) {
            console.log("Error");
        });
    }
    
    angular
        .module('knowYourBeer')
        .controller('SearchCtrl', ['$http', '$scope', SearchCtrl]);
 })();