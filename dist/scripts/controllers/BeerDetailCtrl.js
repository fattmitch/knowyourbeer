(function() {
    function BeerDetailCtrl() {
        this.beerTitle = "Pliny the Elder Test";
        this.brewery = "Russian River Brewery";
    }
    
    angular
        .module('knowYourBeer')
        .controller('BeerDetailCtrl', BeerDetailCtrl);
})();