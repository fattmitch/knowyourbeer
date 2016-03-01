var Hapi = require('hapi'),
    path = require('path'),
    BreweryDb = require('brewerydb-node'),
    brewdb = new BreweryDb('6de3e767a19d0512bacc940476987bd9'),
    port = process.env.PORT || 3000,
    server = new Hapi.Server(port),
    routes = {
        css: {
            method: 'GET',
            path: '/styles/{path*}',
            handler: createDirectoryRoute('styles')
        },
        js: {
            method: 'GET',
            path: '/scripts/{path*}',
            handler: createDirectoryRoute('scripts')
        },
        assets: {
            method: 'GET',
            path: '/assets/{path*}',
            handler: createDirectoryRoute('assets')
        },
        templates: {
            method: 'GET',
            path: '/templates/{path*}',
            handler: createDirectoryRoute('templates')
        },
        beer: {
            method: 'GET',
            path: '/beer',
            handler: function(req, reply) {
                brewdb.beer.getById("XAXGgF", {withBreweries: "Y"}, function(err, data) {
                    reply(data);
                });
            }
        },
        brewery: {
            method: 'GET',
            path: '/brewery',
            handler: function(req, reply) {
                brewdb.breweries.getById("BSsTGw", {}, function(err, data) {
                    reply(data);
                });
            }
        },
        /*breweryBeers: {
            method: 'GET',
            path: '/brewery-beers',
            handler: function(req, reply) {
                brewdb.brewery.getById("BSsTGw", {}, function(err, data){
                   reply(data); 
                });
            }
            
        },*/
        spa: {
            method: 'GET',
            path: '/{path*}',
            handler: {
                file: path.join(__dirname, '/dist/index.html')
            }
        }
    };

server.route([ routes.css, routes.js, routes.assets, routes.templates, routes.spa, routes.beer, routes.brewery ]);
server.start( onServerStarted );

function onServerStarted() {
    console.log( 'Server running on port ', port );
}

function createDirectoryRoute( directory ) {
    return {
        directory: {
            path: path.join(__dirname, '/dist/', directory)
        }
    };
}

module.exports = server;