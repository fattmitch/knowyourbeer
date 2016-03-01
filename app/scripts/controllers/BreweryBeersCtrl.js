(function() {
    function BreweryBeersCtrl($http, $scope) {
        $http({
            method: 'GET',
            url: '/beer'
        }).then(function success(response) {
            $scope.beerTitle = response.data.name;
            $scope.beerLogo = response.data.labels.medium;
        }, function error(response) {
            console.log("Error");
        });
    }
    angular
        .module('knowYourBeer')
        .controller('BreweryBeersCtrl', ['$http', '$scope', BreweryBeersCtrl]);
})();