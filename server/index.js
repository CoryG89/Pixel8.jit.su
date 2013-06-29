module.exp/** Import required node modules */
var http = require('http');

/** Import required server modules */
var router = require('./router');

module.exports = new (function () {
    this.http = null;
    this.router = null;

    this.createServer = function (app) {
        this.router = router.init(app);
        this.http = http.createServer(app);
        return this;
    };

    this.listen = function (port, callback) {
        this.http.listen(port, callback);
        return this;
    };
})();