(function() {
    function BeerDetailCtrl($http, $scope, $stateParams) {
        var beerId = $stateParams.id;
        
        $scope.loading = true;
        
        $http({
            method: 'GET',
            url: '/beer/' + beerId
        }).then(function success(response) {
            $scope.beer = response.data;
            $scope.breweryId = response.data.breweries[0].id;
            $scope.breweryTitle = response.data.breweries[0].name;
            $scope.breweryDescription = response.data.breweries[0].description;
            $scope.breweryCity = response.data.breweries[0].locations[0].locality;
            $scope.breweryState = response.data.breweries[0].locations[0].region;
            $scope.breweryCountry = response.data.breweries[0].locations[0].country.displayName;
            
            $scope.loading = false;
            
        }, function error(response) {
            console.log("Error");
        });
    }
    
    angular
        .module('knowYourBeer')
        .controller('BeerDetailCtrl', ['$http', '$scope', '$stateParams', BeerDetailCtrl]);
})();