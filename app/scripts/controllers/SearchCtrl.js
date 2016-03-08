(function() {
    function SearchCtrl($http, $scope, $stateParams) {
        var searchQuery = $stateParams.query;
               
        $http({
            method: 'GET',
            url: '/search/' + searchQuery
        }).then(function success(response) {
            $scope.beerResults = response.data.data;
        }, function error(response) {
            console.log("Error");
        });
    }
        
    
    angular
        .module('knowYourBeer')
        .controller('SearchCtrl', ['$http', '$scope', '$stateParams', SearchCtrl]);
 })();