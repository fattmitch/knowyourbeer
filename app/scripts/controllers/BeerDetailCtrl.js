(function() {
    function BeerDetailCtrl($http, $scope, $stateParams) {
        var beerId = $stateParams.id;
        $http({
            method: 'GET',
            url: '/beer/' + beerId
        }).then(function success(response) {
            $scope.beerTitle = response.data.name;
            $scope.beerDescription = response.data.description;
            $scope.abv = response.data.abv;
            $scope.ibu = response.data.ibu;
            $scope.breweryId = response.data.breweries[0].id;
            $scope.beerStyle = response.data.style.name;
            $scope.beerLogoIcon = response.data.labels.medium;
            $scope.breweryTitle = response.data.breweries[0].name;
            $scope.breweryDescription = response.data.breweries[0].description;
            $scope.breweryCity = response.data.breweries[0].locations[0].locality;
            $scope.breweryState = response.data.breweries[0].locations[0].region;
            $scope.breweryCountry = response.data.breweries[0].locations[0].country.displayName;
        }, function error(response) {
            console.log("Error");
        });
    }
    
    angular
        .module('knowYourBeer')
        .controller('BeerDetailCtrl', ['$http', '$scope', '$stateParams', BeerDetailCtrl]);
})();