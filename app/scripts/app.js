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
                url: '/search-results/:query',
                controller: 'SearchCtrl as search',
                templateUrl: '/templates/search-results.html'
            })
        
            .state('beer-detail', {
                url: '/beer-detail/:id',
                controller: 'BeerDetailCtrl as beerDetail',
                templateUrl: '/templates/beer-detail.html'
            })
        
            .state('brewery-detail', {
                    url: '/brewery-detail/:id',
                    controller: 'BreweryDetailCtrl as breweryDetail',
                    templateUrl: '/templates/brewery-detail.html'
            })
        
            .state('about-us', {
                url: '/about',
                templateUrl: '/templates/about-us.html'
            })
        
            .state('contact-us', {
                url: '/contact',
                templateUrl: '/templates/contact-us.html'
            });
    }
    
    angular
        .module('knowYourBeer', ['ui.router'])
        .config(config);
 })();