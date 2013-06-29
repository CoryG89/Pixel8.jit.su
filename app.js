var express = require('express');
var ejs = require('ejs');

/** Import local server module */
var server = require('./server')

var app = express();

/** Define default express app configuration */
app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/server/views');
    app.set('view engine', 'html');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
    app.engine('html', ejs.__express);
});

/** Define 'development' express app configuration */
app.configure('devlopment', function () {
    app.use(express.errorHandler());
});

/** Local variables accessible to all views, i.e. globals */
app.locals({
    site: require('./config')
});

/** Create the server and begin listening on default app port */
server.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});