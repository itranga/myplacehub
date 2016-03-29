"use strict";
var mongoose = require('mongoose');
var dbConst = require('../constants/db.json');
var DBConfig = (function () {
    function DBConfig() {
    }
    DBConfig.init = function () {
        var URL = dbConst.localhost;
        mongoose.connect(URL);
        mongoose.connection.on('error', console.error.bind(console, 'An error ocurred with the DB connection: '));
    };
    return DBConfig;
}());
exports.DBConfig = DBConfig;
;
