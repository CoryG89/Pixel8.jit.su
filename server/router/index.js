var routes = require('./routes');

module.exports = new (function () {

    this.init = function (app) {
        app.get('/', routes.home);
        app.get('/home', routes.home);
        app.get('/user', routes.user);
        app.get('/test', routes.test);
    };

})();
