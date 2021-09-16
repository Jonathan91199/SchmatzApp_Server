var getRequestsHandler = require('./GET/getRequestsHandler')
var createError = require('http-errors');

module.exports = function apiManager(app) {
    getRequestsHandler(app)
    

  
  
  
    //Error Handling
    app.use(function (req, res, next) {
        next(createError(404));
    });
    app.use(function (err, req, res, next) {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        res.status(err.status || 500);
        res.render('error');
    });

}