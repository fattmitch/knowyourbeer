(function() {
    function beerPull() {
        var beerData = {};  
        
        //logic here to connect to beerDB and return value
        
        //data needed: Beer Name, Brewery Name, Location, beerLogo, breweryLogo, beerDescription, breweryDescription, otherBeers, beerStyle, ibus, abv
        
        return beerData;
    }
    
    angular
        .module('knowYourBeer')
        .factory('beerPull', beerPull);
})();