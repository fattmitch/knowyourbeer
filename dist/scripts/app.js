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
        
            .state('search-results', {
                url: '/search-results',
                templateUrl: '/templates/search-results.html'
        })
        
            .state('beer-detail', {
                url: '/beer-detail',
                controller: 'BeerDetailCtrl as beerDetail',
                templateUrl: '/templates/beer-detail.html'
        })
        
        .state('brewery-detail', {
                url: '/brewery-detail',
                controller: 'BreweryDetailCtrl as breweryDetail',
                templateUrl: '/templates/brewery-detail.html'
        })
        
        .state('about-us', {
            url: '/about',
            templateUrl: '/templates/about-us.html'
        });
    }
    
    angular
        .module('knowYourBeer', ['ui.router'])
        .config(config);
 })();