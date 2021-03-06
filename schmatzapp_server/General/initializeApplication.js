var express = require('express')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


module.exports = function initializeApplication() {
    var app = express();

    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'jade');

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

 
    return app
}