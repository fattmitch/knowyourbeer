(function() {
    function SearchCtrl($http, $scope, $stateParams) {
        
        var searchQuery = $stateParams.query;
               
        $scope.loading = true;
                      
        $http({
            method: 'GET',
            url: '/search/' + searchQuery
        }).then(function success(response) {
            if (response.data.data) {
                $scope.beerResults = response.data.data;
            } else {
                $scope.noResults = "No results.";
            }
            $scope.loading = false;
        }, function error(response) {
            console.log("Error");
        });
    }
        
    
    angular
        .module('knowYourBeer')
        .controller('SearchCtrl', ['$http', '$scope', '$stateParams', SearchCtrl]);
 })();