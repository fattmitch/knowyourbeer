(function() {
    function SearchBarCtrl($scope, $state) {
        
        $scope.search = function() {
            $state.go('search-results', {query: $scope.searchQuery});
        };
    }
    
    angular
        .module('knowYourBeer')
        .controller('SearchBarCtrl', ['$scope', '$state', SearchBarCtrl]);
 })();