(function() {
    function BreweryDetailCtrl($http, $scope) {
        $http({
            method: 'GET',
            url: '/brewery'
        }).then(function success(response) {
            $scope.breweryTitle = response.data.name;
            $scope.breweryDescription = response.data.description;
            $scope.breweryLogo = response.data.images.squareMedium;
        }, function error(response) {
            console.log("Error");
        });
    
        $http({
            method: 'GET',
            url: '/beer'
        }).then(function success(response) {
            $scope.breweryCity = response.data.breweries[0].locations[0].locality;
            $scope.breweryState = response.data.breweries[0].locations[0].region;
            $scope.breweryCountry = response.data.breweries[0].locations[0].country.displayName;
        }, function error(response) {
            console.log("Error2");
        });
    }
    angular
        .module('knowYourBeer')
        .controller('BreweryDetailCtrl', ['$http', '$scope', BreweryDetailCtrl]);
})();