(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: '/templates/landing.html'
        })
        
        $stateProvider
            .state('search-results', {
                url: '/search-results',
                templateUrl: '/templates/search-results.html'
        })
        
        $stateProvider
            .state('beer-detail', {
                url: '/beer-details',
                templateUrl: '/templates/beer-detail.html'
        });
    }
    
    angular
        .module('knowYourBeer', ['ui.router'])
        .config(config);
 })();