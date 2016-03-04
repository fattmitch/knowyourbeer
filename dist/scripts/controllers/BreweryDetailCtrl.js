(function() {
    function BreweryDetailCtrl($http, $scope, $stateParams) {
        var breweryId = $stateParams.id;
        var beerId;
        
        function callBeer(beerId) {
            $http({
                method: 'GET',
                url: '/beer/' + beerId
            }).then(function success(response) {
                $scope.breweryCity = response.data.breweries[0].locations[0].locality;
                $scope.breweryState = response.data.breweries[0].locations[0].region;
                $scope.breweryCountry = response.data.breweries[0].locations[0].country.displayName;
            }, function error(response) {
                console.log('beer location error');
            });
        }
        
        $http({
            method: 'GET',
            url: '/brewery/' + breweryId
        }).then(function success(response) {
            $scope.brewery = response.data;           
        }, function error(response) {
            console.log("Error");
        });
        
    
        
        $http({
            method: 'GET',
            url: '/brewery/' + breweryId + '/beers'
        }).then(function success(response) {
            $scope.beerList = response.data.data;           
            beerId = $scope.beerList[0].id;
            callBeer(beerId);
        }, function error(response) {
            console.log('BeerList Error');
        });
    }
    angular
        .module('knowYourBeer')
        .controller('BreweryDetailCtrl', ['$http', '$scope', '$stateParams', BreweryDetailCtrl]);
})();